<template>
  <!-- <router-link :to="{ name: 'MovieDetail' }"> -->
    <div class="medianowplaying"  @click.prevent="LoadMovieDetail(movieCard)">
      <div class="overlay"></div>
      <img :src="'http://image.tmdb.org/t/p/w500/' + movieCard.poster_path">
      <div class="image-details">
        <p style="font-size:20px; font-weight:bold;">{{ movieCard.title }}</p>
        <!-- <hr style="width:90%; margin-left:10px;">
        <br>
        <p style="font-size:10px; text-align:left; line-height: 200%;">{{ movieCard.overview }}</p> -->
      </div>
    </div>
  <!-- </router-link> -->
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NowPlaying',

  props: {
    movieCard: Object,

  },
  methods: {
    ...mapActions([
      'LoadMovieDetail',
    ])
  },
}
</script>

<style>
  .medianowplaying {
    width: 20%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    overflow: hidden;
    position: relative;
  }

  .medianowplaying:hover {
    cursor: pointer;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 3;
    opacity: 0;
    transition: all ease-in-out 0.5s;
  }

  .medianowplaying:hover .overlay {
    opacity: 1;
  }

  img {
    width: 100%;
    z-index: 0;
    margin: auto;
    transform: scale(1);
    transition: all ease-in-out 0.5s;
  }

  .medianowplaying:hover img {
    transform: scale(1.1);
    filter: blur(2px);
  }

  .image-details {
    text-align: center;
    color: white;
    font-size: 20px;
    z-index: 4;
    position: absolute;
    top: 100%;
    opacity: 0;
    transition: all ease-in-out 0.5s;
  }

  .medianowplaying:hover .image-details {
    top: 40%;
    opacity: 1;
  }

  @media only screen and (max-width: 900px) {
    .medianowplaying {
      width: 70%;
      height: 70%;
    }
  } 
</style>