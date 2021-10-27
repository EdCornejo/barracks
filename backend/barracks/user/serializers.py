from django.utils import timezone
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from user.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active', 'is_staff', 'is_mobile_user']
        read_only_field = ['is_active']



class UserRegisterSerializer(UserSerializer):
    email = serializers.EmailField(required=True, write_only=True, max_length=100)
    password = serializers.CharField(max_length=100, min_length=4, write_only=True, required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'is_active']

    def create(self, validated_data):
        try:
            user = User.objects.get(email=validated_data['email'])
        except ObjectDoesNotExist:
            user = User.objects.create_user(**validated_data)
        return user



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
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        request = self.context.get('request')
        keywords = ['Mobile','Opera Mini','Android']
        user_agent = request.META['HTTP_USER_AGENT']

        is_mobile_user = False

        if any(word in user_agent for word in keywords):
            is_mobile_user = True

        self.user.is_mobile_user = is_mobile_user
        self.user.save()

        return data