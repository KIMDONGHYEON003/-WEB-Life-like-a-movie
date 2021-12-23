const SERVER_URL = process.env.VUE_APP_SERVER_URL


export default {
  URL: SERVER_URL,
  ROUTES: {
    signup: '/accounts/signup/',
    login: '/accounts/api/token/',
    review: '/community/reviews/',
    personalreview: '/community/personalreviews/',
    comment: '/community/comments/',
    movielist: '/movies/movie_list/',
    random_worldcup: '/movies/worldcup/',
    worldcupmovie_detail: '/movies/movie_detail/',
    genre_movie: '/movies/genre_movie_list/'
  }
}