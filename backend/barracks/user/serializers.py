from django.utils import timezone
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from user.models import User
from user.utils import is_using_mobile



class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active', 'is_staff', 'is_mobile_user', 'last_login']
        read_only_field = ['is_active']



class UserRegisterSerializer(UserSerializer):
    username = serializers.CharField(required=True, write_only=True, max_length=100)
    email = serializers.EmailField(required=True, write_only=True, max_length=100)
    password = serializers.CharField(max_length=100, min_length=4, write_only=True, required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'is_active', 'is_staff', 'is_mobile_user']

    def create(self, validated_data):
        try:
            user = User.objects.create_user(**validated_data)
            request = self.context.get('request')
            user.is_mobile_user = is_using_mobile(request)
            user.save()
            return user
        except Exception as e:
            try:
                User.objects.get(username=validated_data['username'])
                raise serializers.ValidationError({'error': 'Username already exists'})
            except ObjectDoesNotExist:
                raise serializers.ValidationError({'error': 'Email already exists'})


class UserLoginSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        update_last_login(None, user)

        token['user'] = UserSerializer(user).data
        token['timestamp'] = str(timezone.now().timestamp())
        token['is_superuser'] = user.is_superuser

        return token


    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = UserLoginSerializer.get_token(self.user)
        # data['refresh'] = str(refresh)
        data['user'] = UserSerializer(self.user).data
        data['access'] = str(refresh.access_token)
        del data['refresh']

        request = self.context.get('request')
        self.user.is_mobile_user = is_using_mobile(request)
        self.user.save()

        return data