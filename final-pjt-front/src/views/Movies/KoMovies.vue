<template>
  <div id="komovie">
    <h1>Korean</h1>
    <body class="scroll" style="overflow:scroll; height:650px; overflow-x:hidden;">
      <div class="image-wrapper" style="width: 80%;" >
        <now-playing
          v-for="movieCard in koMovieCards"
          :key="movieCard.id"
          :movieCard="movieCard"
          class="row"
        >
        </now-playing>
      </div>
    </body> 

  </div>
</template>

<script>
import NowPlaying from '@/components/Movies/NowPlaying.vue'
import {mapState} from 'vuex'

export default {
  name: 'KoMovie',
  components: { 
    NowPlaying,
  },
  created: function () {
    this.$store.dispatch('LoadKoMovieCards')
  },
  computed: {
    ...mapState([
      'koMovieCards'
    ])
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;300;400;700&display=swap');

  body {
    font-family: 'Jost', sans-serif;
    /* background-color : #212121; */
    
  }

  h1 {
    color: white;
    font-size: 36px;
    text-align: center;
  }

  .image-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: auto;
    margin-bottom: 50px;
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