from django.shortcuts import render, get_object_or_404
from .models import Movie, Worldcup, Genre
from .serializers import MovieListSerializer, WorldcupSerializer, GenreListSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

import random


@api_view(["GET"])
@permission_classes([AllowAny])
def movie_list(request):
    if request.method == "GET":
        movies = Movie.objects.all()
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def random_worldcup(request):
    movies = Movie.objects.all()
    random_movies = random.sample(list(movies), 8)

    worldcup = Worldcup()
    worldcup.save()
    worldcup.movie.set(random_movies)

    worldcup_serializer = WorldcupSerializer(worldcup)
    return Response(worldcup_serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def worldcup_detail(request, worldcup_pk):
    worldcup = get_object_or_404(Worldcup, pk=worldcup_pk)
    worldcup_serializer = WorldcupSerializer(worldcup)
    return Response(worldcup_serializer.data)


@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = Movie.objects.get(pk=movie_pk)
    movie_detail_serializer = MovieListSerializer(movie)
    return Response(movie_detail_serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def genre(request):
    genres = Genre.objects.all()
    genres_serializer = GenreListSerializer(genres, many=True)
    return Response(genres_serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def genre_detail(request, genre_pk):
    genre = get_object_or_404(Genre, pk=genre_pk)
    genre_serializer = GenreListSerializer(genre)
    return Response(genre_serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def genre_movie_list(request, genre_pk):
    genre = get_object_or_404(Genre, pk= genre_pk)
    movies = Movie.objects.filter(genres=genre)[:5]
    serializer = MovieListSerializer(movies, many=True)
    return Response(serializer.data)

