# from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from user.models import User
from core.models import Movie


class Command(BaseCommand):
    help = 'Init db'

    def handle(self, *args, **kwargs):
        User.objects.all().delete()
        User.objects.create_superuser(username='admin', email='admin@ejemplo.poc', password='admin123')
        User.objects.create_user(username='demo', email='demo@mail.poc', password='demo123')

        Movie.objects.all().delete()
        Movie.objects.create(
            title='Avengers: Infinity War',
            description='As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
            poster_path='https://themoviedb.org/t/p/w440_and_h660_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
            vote_average=8.3,
            vote_count=6937,
            popularity=358.799
        )
        Movie.objects.create(
            title='Deadpool 2',
            description='Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy\'s life.',
            poster_path='https://themoviedb.org/t/p/w440_and_h660_face/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg',
            vote_average=7.6,
            vote_count=3938,
            popularity=223.011
        )
        Movie.objects.create(
            title='Upgrade',
            description='A brutal mugging leaves Grey Trace paralyzed in the hospital and his beloved wife dead. A billionaire inventor soon offers Trace a cure — an artificial intelligence implant called STEM that will enhance his body. Now able to walk, Grey finds that he also has superhuman strength and agility — skills he uses to seek revenge against the thugs who destroyed his life.',
            poster_path='https://themoviedb.org/t/p/w440_and_h660_face/adOzdWS35KAo21r9R4BuFCkLer6.jpg',
            vote_average=7.6,
            vote_count=138,
            popularity=32.969
        )
        Movie.objects.create(
            title='To All the Boys I\'ve Loved Before',
            description='Lara Jean\'s love life goes from imaginary to out of control when her secret letters to every boy she\'s ever fallen for are mysteriously mailed out.',
            poster_path='https://themoviedb.org/t/p/w440_and_h660_face/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg',
            vote_average=8.4,
            vote_count=349,
            popularity=31.76
        )
        Movie.objects.create(
            title='Tag',
            description='For one month every year, five highly competitive friends hit the ground running in a no-holds-barred game of tag they’ve been playing since the first grade. This year, the game coincides with the wedding of their only undefeated player, which should finally make him an easy target. But he knows they’re coming...and he’s ready.',
            poster_path='https://themoviedb.org/t/p/w440_and_h660_face/eXXpuW2xaq5Aen9N5prFlARVIvr.jpg',
            vote_average=7,
            vote_count=285,
            popularity=87.194
        )