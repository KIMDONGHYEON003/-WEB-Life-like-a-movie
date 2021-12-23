from django.urls import path
from . import views


urlpatterns = [
    path('movie_list/', views.movie_list),
    path('movie_detail/<int:movie_pk>/', views.movie_detail),
    path('worldcup/', views.random_worldcup),
    path('worldcup/<int:worldcup_pk>/', views.worldcup_detail),
    path('genre/', views.genre),
    path('genre/<int:genre_pk>/', views.genre_detail),
    path('genre_movie_list/<int:genre_pk>/', views.genre_movie_list),

]