from django.db import models

# Create your models here.

class Genre(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Movie(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField()
    popularity = models.FloatField()
    vote_count = models.IntegerField()
    vote_average = models.FloatField()
    overview = models.TextField()
    poster_path = models.CharField(max_length=200)
    original_language = models.CharField(max_length=30)
    genres = models.ManyToManyField(Genre)

class Worldcup(models.Model):
    movie = models.ManyToManyField(Movie, related_name='worldcups')