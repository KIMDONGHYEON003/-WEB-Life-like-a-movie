<template>
  <div id="homepage">
    <div>
      <img class="customlogo" :src="movielogo" alt="logo">
    </div>
    <autocomplete
      :search="search"
      placeholder="Search Movies"
      aria-label="Search Wikipedia"
      :get-result-value="getResultValue"
      @submit="handleSubmit"
      class="searchbar"
    ></autocomplete>
    <carousel-3d class="carousel-main">
      <slide v-for="(movie, idx) in MovieLists" :key="idx" :index="idx">
        <figure>
          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" width="100%" height="100%">
        </figure>
      </slide>
    </carousel-3d>
    
  </div>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
import { mapActions, mapState } from 'vuex'
import movielogo from '@/assets/movielogo.png'


export default {
  name: 'HomePage',
  data: function () {
    return {
      movielogo
    }
  },
  components: {
    Autocomplete
  },
  methods: {
    ...mapActions([
      'GetMovieLists',
    ]),
    search(input) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_TMDB_API_KEY}&query=${encodeURI(input)}&language=ko-KR`

      return new Promise(resolve => {
        if (input.length < 1) {
          return resolve([])
        }

        fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            resolve(data.results)
          })
      })
    },
    getResultValue(result) {
      return result.title
    },
    handleSubmit(result) {
      this.$store.dispatch('LoadMovieDetail', result)
    }
    
  },
  computed: {
    ...mapState([
      'MovieLists',
    ])
  },

  created: function () {
    if (this.$store.getters.isLoggedIn) {
      this.GetMovieLists()
    } 
  },
  

  
    
    
 
}
</script>

<style>
  #homepage {
    margin: 0 auto;
  }

  #homepage .searchbar {
    position: absolute;
    top: 250px;
    left: 30%;
    width: 600px;
  }

  .carousel-main {
    top: 300px;
  }

  #homepage .customlogo {
    width: 30%;
    position: absolute;
    top: 70px;
    left: 35%;
    display: flex;
    margin: auto;

  }


</style>
