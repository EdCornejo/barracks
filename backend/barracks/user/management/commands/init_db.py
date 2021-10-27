# from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from user.models import User


class Command(BaseCommand):
    help = 'Init db'

    def handle(self, *args, **kwargs):
        User.objects.all().delete()
        User.objects.create_superuser(username='admin', email='admin@ejemplo.poc', password='admin123')
        User.objects.create_user(username='demo', email='demo@mail.poc', password='demo123')