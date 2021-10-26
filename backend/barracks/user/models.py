from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):

    def create_user(self, username, email, password, **kwargs):
        if password is None:
            raise TypeError('Password is required')
        if username is None:
            raise TypeError('Username is required')
        if email is None:
            raise TypeError('Email is required')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user


    def create_superuser(self, username, email, password):
        if password is None:
            raise TypeError('Password is required')
        if username is None:
            raise TypeError('Username is required')
        if email is None:
            raise TypeError('Email is required')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user



class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True,  null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    # REQUIRED_FIELDS = ['username']

    objects = UserManager()