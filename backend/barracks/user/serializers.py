from rest_framework import serializers

from user.models import User



class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active']
        read_only_field = ['is_active']