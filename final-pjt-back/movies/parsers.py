import json
import requests
from decouple import config

API_KEY = config("TMDB_API_KEY")

BASE_URL = 'https://api.themoviedb.org/3'


def answer_url(method_url, **kwargs):
    request_url = BASE_URL + method_url + f'?api_key={API_KEY}'

    for k, v in kwargs.items():
        request_url += f'&{k}={v}'

    return request_url


genre_url = answer_url('/genre/movie/list', language='ko-KR')


movie_total_data = []

# 장르 정보 넣기

genre_information = requests.get(genre_url).json().get('genres')


for genre in genre_information:
    movie_total_data.append(
        {
            "model": "movies.genre",
            "pk": genre["id"],
            "fields": {
                "name": genre["name"]
            }
        }
    )


# 추천 영화 정보 넣기

ko_page_idx = 1
while ko_page_idx <= 4:
    ko_movie_url = answer_url('/movie/top_rated', language='ko-KR', with_original_language='ko', page=ko_page_idx)
    movie_information = requests.get(ko_movie_url).json().get('results')

    for movie in movie_information:
        movie_total_data.append(
            {
                "model": "movies.movie",
                "pk": movie["id"],
                "fields": {
                    "title": movie["title"],
                    "release_date": movie["release_date"],
                    "popularity": movie["popularity"],
                    "vote_count": movie["vote_count"],
                    "vote_average": movie["vote_average"],
                    "overview": movie["overview"],
                    "poster_path": movie["poster_path"],
                    "original_language": movie["original_language"],
                    "genres": movie["genre_ids"]
            }
            }
        )
    ko_page_idx += 1

en_page_idx = 1
while en_page_idx <= 8:
    en_movie_url = answer_url('/movie/top_rated', language='ko-KR', with_original_language='en', page=en_page_idx)
    movie_information = requests.get(en_movie_url).json().get('results')

    for movie in movie_information:
        movie_total_data.append(
            {
                "model": "movies.movie",
                "pk": movie["id"],
                "fields": {
                    "title": movie["title"],
                    "release_date": movie["release_date"],
                    "popularity": movie["popularity"],
                    "vote_count": movie["vote_count"],
                    "vote_average": movie["vote_average"],
                    "overview": movie["overview"],
                    "poster_path": movie["poster_path"],
                    "original_language": movie["original_language"],
                    "genres": movie["genre_ids"]
            }
            }
        )
    en_page_idx += 1

with open('../movies/fixtures/movies/movies.json', 'w', encoding='utf-8') as file:
    json.dump(movie_total_data, file, indent='\t', ensure_ascii=False)




