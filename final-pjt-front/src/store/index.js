import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router/index.js'
import SERVER from '@/api/drf.js'
import createPersistedState from "vuex-persistedstate";
import Carousel3d from 'vue-carousel-3d';
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'
import Swal from 'sweetalert2'


Vue.use(Vuex)
Vue.use(Carousel3d);
Vue.use(Autocomplete)


export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    topRatedMovieCards: [],
    allMovieCards: [],
    koMovieCards: [],
    authToken: localStorage.getItem('jwt'),
    reviewLists: [],
    personalReviewLists: [],
    reviewDetail: [],
    commentLists: [],
    userName: '',
    MovieLists: [],
    worldcup_movieLists: [],
    movieDetail: [],
    inputValue: '',
    selectedVideo: '',
    videos: [],
    castMembers: [],
  },
  getters: {
    isLoggedIn: function (state) {
      // authToken이 있으면 true, 없으면 false return  ? true : false
      return state.authToken ? true : false
    },
    config: function (state) {
      return {
        Authorization: `Bearer ${state.authToken}`
      }
    },
    videoURI: function (state) {
      // console.log(state.selectedVideo.id.videoId)
      if (state.selectedVideo) {
        const videoId = state.selectedVideo.id.videoId
        // const videoId = this.selectedVideo.id.videoId
        return `https://www.youtube.com/embed/${videoId}`
      }
    },
    videoTitle: function (state) {
      if (state.selectedVideo) {
        return state.selectedVideo.snippet.title
      }
    },
    videoDescription: function (state) {
      if (state.selectedVideo) {
        return state.selectedVideo.snippet.description
      }
    },
    videosLength: function (state) {
      if (state.videos) {
        return state.videos.length
      }
    }
  },
  mutations: {
    LOAD_TOP_RATED_MOVIE_CARDS: function (state, results) {
      state.topRatedMovieCards = results
    },
    LOAD_ALL_MOVIE_CARDS: function (state, results) {
      state.allMovieCards = results
    },
    LOAD_KO_MOVIE_CARDS: function (state, results) {
      state.koMovieCards = results
    },
    LOAD_MOVIE_DETAIL: function (state, results) {
      state.movieDetail = results
    },
    SET_SELECTED_VIDEO: function (state, selectedDetailVideo) {
      // console.log(state)
      // console.log(selectedDetailVideo)
      state.selectedVideo = selectedDetailVideo
    },
    SET_INPUT_VALUE: function (state, inputValue) {
      // console.log(state)
      // console.log(event.target.value)
      state.inputValue = inputValue
    },
    SET_VIDEOS: function (state, videos) {
      state.videos = videos
    },
    LOAD_MOVIE_CREDITS: function (state, results) {
      state.castMembers = results
    },
    SET_TOKEN: function (state, token) {
      //1. JWT를 변경 
      state.authToken = token
      //2. local storage에 JWT 저장
      localStorage.setItem('jwt', token)
    },
    REMOVE_TOKEN: function (state) {
      //1. JWT 변경
      localStorage.removeItem('jwt')
      //2. local storage에서 JWT 삭제
      state.authToken = ''
    },
    GET_USER: function (state, results) {
      state.userName = results
    },
    LOAD_REVIEW_LISTS: function (state, results) {
      state.reviewLists = results
    },
    LOAD_REVIEW_DETAIL: function (state, results) {
      state.reviewDetail = results
    },
    LOAD_PERSONAL_REVIEW_LISTS: function (state, results) {
      state.personalReviewLists = results
    },
    LOAD_COMMENT_LISTS: function (state, results) {
      state.commentLists = results
    },
    UPDATE_REVIEW: function (state, results) {
      state.reviewDetail = results
    },
    GET_MOVIES: function (state, movielist) {
      state.MovieLists = movielist
    },
    GET_WORLDCUP_MOVIES: function (state, movielist) {
      state.worldcup_movieLists.push(movielist)
    },
  },
  actions: {
    login: function ({ commit }, credentials) {
      commit('GET_USER', credentials.username)
      axios({
        url: SERVER.URL + SERVER.ROUTES.login,
        method: 'post',
        data: credentials,
      })
      .then((res) => {
        commit('SET_TOKEN', res.data.access)
        router.push('/')
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        console.log(err)
      })
    },
    logout: function ({ commit }) {
      commit('REMOVE_TOKEN')
      router.push('/')
    },
    signup: function (context, credentials) {
      axios({
        url: SERVER.URL + SERVER.ROUTES.signup,
        method: 'post',
        data: credentials,
      })
      .then(() => {
        router.push('/')
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        console.log(err)
      })
    },
    LoadTopRatedMovieCards: function ({commit}) {
      axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: 'ko-KR',
        }
      })
        .then((res) => {
          commit('LOAD_TOP_RATED_MOVIE_CARDS', res.data.results)
        })
    },
    LoadAllMovieCards: function ({commit}) {
      axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: 'ko-KR',
        }
      })
        .then((res) => {
          commit('LOAD_ALL_MOVIE_CARDS', res.data.results)
        })
    },
    LoadKoMovieCards: function ({commit}) {
      axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: 'ko-KR',
          with_original_language: 'ko'
        }
      })
        .then((res) => {
          commit('LOAD_KO_MOVIE_CARDS', res.data.results)
        })
    },
    LoadMovieDetail: function ({ commit }, request) {
      axios({
        url: `http://api.themoviedb.org/3/movie/${request.id}`,

        method: 'get',
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: 'ko-KR',
        }
      })
      .then((res) => {  
        commit('LOAD_MOVIE_DETAIL', res.data)
        router.push({name: 'MovieDetail', params: {movieNumber : request.id}})
      })
      .catch((err) => {
        console.log(err)
      })
    },
    LoadMovieDetailTrailer: function ({commit, state}, request) {
      commit('SET_INPUT_VALUE', request.title)
      const params = {
        key: process.env.VUE_APP_YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        // state 정보에서 inputValue를 가져오자 SET_INPUT_VALUE mutations로 인해 이미 변경됨
        q: request.title,
      }
      axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params,
      })
      .then((res) => {
        // this.videos = res.data.items
        // 응답으로 받은 비디오 데이터 갱신(변경)
        commit('SET_VIDEOS', res.data.items)
        state.selectedVideo = state.videos[0]
        router.push({name: 'MovieDetailTrailer', params: {movieNumber : request.id}}) 
      })
      .catch((err) => {
        console.log(err)
      })
      
    },
    LoadMovieCredits: function ({ commit }, request) {
      axios({
        url: `http://api.themoviedb.org/3/movie/${request.id}/credits`,

        method: 'get',
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: 'ko-KR',
        }
      })
      .then((res) => {  
        commit('LOAD_MOVIE_CREDITS', res.data.cast)
        router.push({name: 'MovieDetailAllMembers', params: {movieNumber : request.id}})
      })
      .catch((err) => {
        console.log(err)
      })
    },


    LoadReviewLists: function ({ commit }) {
      axios({
        url: SERVER.URL + SERVER.ROUTES.review,
        method: 'get',
        headers: this.getters.config
    
      })
      .then((res) => {
        commit('LOAD_REVIEW_LISTS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    LoadPersonalReviewLists: function ({ commit }) {
      axios({
        url: SERVER.URL + SERVER.ROUTES.personalreview,
        method: 'get',
        headers: this.getters.config
    
      })
      .then((res) => {
        commit('LOAD_PERSONAL_REVIEW_LISTS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    CreateReview: function (context, request) {

      if (request) {
        axios({
          url: SERVER.URL + SERVER.ROUTES.review,
          method: 'post',
          data: request,
          headers: this.getters.config
      
        })
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 2000
          })    
          router.push({ name: 'Community' })
  
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    LoadReviewDetail: function ({commit}, request) {
      if (request) {
        axios({
          url: SERVER.URL + SERVER.ROUTES.review + request.id,
          method: 'get',
          headers: this.getters.config
      
        })
        .then((res) => {  
          commit('LOAD_REVIEW_DETAIL', res.data)
          router.push({ name: 'ReviewDetail', params: { reviewNumber: request.id } })
  
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    LoadPersonalReviewDetail: function ({commit}, request) {
      if (request) {
        axios({
          url: SERVER.URL + SERVER.ROUTES.review + request.id,
          method: 'get',
          headers: this.getters.config
      
        })
        .then((res) => {  
          commit('LOAD_REVIEW_DETAIL', res.data)
          router.push({ name: 'PersonalReviewDetail', params: { reviewNumber: request.id } })
  
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    UpdateReview: function ({commit}, data) {
      
      if (!data.title) {
        data.title = this.state.reviewDetail.title
      }
      if (!data.content) {
        data.content = this.state.reviewDetail.content
      }
      if (!data.movie) {
        data.movie = this.state.reviewDetail.movie
      }
      if (data.rank === 0) {
        data.rank = this.state.reviewDetail.rank
      }
      axios({
        url: `${SERVER.URL}${SERVER.ROUTES.review}${this.state.reviewDetail.id}/`,
        method: 'put',
        data,
        headers: this.getters.config  
      })
      .then((res) => {
        Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            commit('UPDATE_REVIEW', res.data)   
            window.location.reload(false) 
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })

        // commit('UPDATE_REVIEW', res.data)   
        // window.location.reload(false) 
        // router.push({ name: 'ReviewDetail', params: { reviewNumber: this.state.reviewDetail.id } })

      })
      .catch((err) => {
        console.log(err)
      })
      
    },
    DeleteReview: function () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          axios({
            url: `${SERVER.URL}${SERVER.ROUTES.review}${this.state.reviewDetail.id}/`,
            method: 'delete',
            headers: this.getters.config  
          })
          .then(() => {    
            router.push({name: 'Community'})
    
          })
          .catch((err) => {
            console.log(err)
          })
        }
      })

      // axios({
      //   url: `${SERVER.URL}${SERVER.ROUTES.review}${this.state.reviewDetail.id}/`,
      //   method: 'delete',
      //   headers: this.getters.config  
      // })
      // .then(() => {    
      //   router.push({name: 'Community'})

      // })
      // .catch((err) => {
      //   console.log(err)
      // })
      
    },
    LoadCommentLists: function ({commit}) {
      axios({
        url: `${SERVER.URL}${SERVER.ROUTES.review}${this.state.reviewDetail.id}/comments/`,
        method: 'get',
        headers: this.getters.config  
      })
      .then((res) => {  
        console.log(res)  
        commit('LOAD_COMMENT_LISTS', res.data)
        router.push({ name: 'ReviewDetail', params: { reviewNumber: this.state.reviewDetail.id } })

      })
      .catch((err) => {
        console.log(err)
      })
      
    },
    CreateComment: function ({commit}, request) {
      console.log(commit)
      axios({
        url: `${SERVER.URL}${SERVER.ROUTES.review}${this.state.reviewDetail.id}/comments/`,
        method: 'post',
        data: request,
        headers: this.getters.config  
      })
      .then(() => {  
        window.location.reload(false)
        router.push({ name: 'ReviewDetail', params: { reviewNumber: this.state.reviewDetail.id } })
      })
      .catch((err) => {
        console.log(err)
      })
      
    },
    DeleteComment: function ({commit}, request) {
      console.log(commit)
      // console.log(request)
      axios({
        url: `${SERVER.URL}${SERVER.ROUTES.review}${this.state.reviewDetail.id}/comments/${request}/`,
        method: 'delete',
        headers: this.getters.config  
      })
      .then(() => {    
        window.location.reload(false)
        router.push({ name: 'ReviewDetail', params: { reviewNumber: this.state.reviewDetail.id } })

      })
      .catch((err) => {
        console.log(err)
      })
      
    },
    GetMovieLists: function ({ commit, getters }) {
      const headers = getters.config
      axios({
        url: SERVER.URL + SERVER.ROUTES.movielist,
        method: 'get',
        headers,
      })
      .then((res) => {
        commit('GET_MOVIES', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    GetWorldCupLists: function ({ commit, getters }) {
      const headers = getters.config
      axios({
        url: SERVER.URL + SERVER.ROUTES.random_worldcup,
        method: 'get',
        headers,
      })
      .then((res) => {
        res.data.movie.forEach(code => {
          const headers = getters.config
          axios({
            url: SERVER.URL + SERVER.ROUTES.worldcupmovie_detail + `${code}`,
            method: 'get',
            headers,
          })
          .then((res) => {
            commit('GET_WORLDCUP_MOVIES', res.data)
          })
        })
      })
    },
    
   
  },
  modules: {
  }
})
