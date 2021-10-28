from rest_framework import serializers

from .models import Movie



class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ['id', 'title', 'description', 'poster_path', 'vote_average', 'vote_count', 'popularity']
        # read_only_field = ['is_active']
