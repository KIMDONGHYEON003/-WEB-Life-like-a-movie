<template>
  <div id="allmovie">
    <h1>ALL</h1>
    <div class="scroll" style="overflow:scroll; height:650px; overflow-x:hidden;" >
      <div class="image-wrapper" style="width: 80%; ">
        <now-playing
          v-for="movieCard in allMovieCards"
          :key="movieCard.id"
          :movieCard="movieCard"
          class="card"
        >
        </now-playing>
      </div>
    </div> 

  </div>
</template>

<script>
import NowPlaying from '@/components/Movies/NowPlaying.vue'
import {mapState} from 'vuex'

export default {
  name: 'AllMovies',
  components: { 
    NowPlaying
  },
  data: function () {
    return {
      movieCard: [],      
    }
  },
  created: function () {
    this.$store.dispatch('LoadAllMovieCards')
  },
  computed: {
    ...mapState([
      'allMovieCards'
    ])
  },
  methods: {

  },

}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;300;400;700&display=swap');


  h1 {
    color: white;
    font-size: 36px;
    text-align: center;
  }

  .image-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    margin: 3%;
    /* margin-bottom: 50px; */
  }


  .scroll::-webkit-scrollbar {
    width: 10px;
  }
  .scroll::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  .scroll::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
</style>