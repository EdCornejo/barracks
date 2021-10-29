from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    poster_path = models.URLField()
    vote_average = models.IntegerField()
    vote_count = models.IntegerField()
    popularity = models.IntegerField()
