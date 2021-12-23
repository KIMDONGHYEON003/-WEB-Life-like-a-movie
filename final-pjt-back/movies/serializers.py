from rest_framework import serializers
from .models import Movie, Genre, Worldcup

class GenreListSerializer(serializers.ModelSerializer):
        
        class Meta:
            model = Genre
            fields = ('id', 'name',)


class MovieListSerializer(serializers.ModelSerializer):

    genres = GenreListSerializer(many=True)

    class Meta:
        model = Movie
        fields = ('id', 'title', 'poster_path', 'genres')


class WorldcupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worldcup
        fields = ('id', 'movie',)