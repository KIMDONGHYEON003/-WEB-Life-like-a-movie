<template>
  <div>
    <!-- <div style="padding-top:15px;"><h1 style="text-align:left; margin-left:10%;">인생을 영화처럼</h1></div> -->
    <div>
      <img class="customlogo" :src="movielogo" alt="logo">
    </div>
    <table style="height:600px; margin-left:5%; margin-top: 7%">
      <tbody style="border-style: solid;">
        <tr >
          <td style="width:400px;">
            <img :src="'http://image.tmdb.org/t/p/w500/' + movieDetail.poster_path" style="float:left; margin-left:5%;  height:600px;">
          </td>
          <td style="margin-left:10%; position: absolute;left: 516px; ">
            <button @click.prevent="LoadModal(movieDetail)" style="background-color:#2C272E; border:none; float:left; margin-right:20px; margin-top:1%">
              <i class="far fa-play-circle fa-5x" style="color:white;"></i>
            </button>
            <button @click.prevent="LoadMovieCredits(movieDetail)" style=" border:none;color:white; margin-top:1% ">
              <i class="far fa-user-circle fa-5x" style="background-color:#2C272E;float:left; "></i>
            </button>
            <tr class="title" style="width:700px;margin-left:0; margin-right:0; float:right;">{{ movieDetail.title }} </tr>
            <tr class="release_date">개봉일  {{ movieDetail.release_date}}</tr>
            <tr class="vote_average">평점  {{ movieDetail.vote_average }}</tr>
            <tr class="overview" style="vertical-align:middle; width:700px;">
              {{ movieDetail.overview }}
            </tr>
            
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ModalMovieDetail from '@/components/Movies/ModalMovieDetail.vue'
import movielogo from '@/assets/movielogo.png'

import axios from 'axios'


export default {
  name: 'MovieDetail',
  data: function () {
    return {
      movielogo
    }
  },
  computed: {
    ...mapState([
      'movieDetail',
      ]),
  },
  methods: {
    LoadMovieDetailTrailer: function (request) {
      this.$store.dispatch('LoadMovieDetailTrailer', request)
    },
    LoadMovieCredits: function (request) {
      this.$store.dispatch('LoadMovieCredits', request)
    },
    LoadModal: function(request) {
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
        const videoId = res.data.items[0].id.videoId
        // const title = res.data.items[0].snippet.title
        // const description = res.data.items[0].snippet.description

        return {
          videoURI: `https://www.youtube.com/embed/${videoId}`,
          // videoTitle: title,
          // videoDescription: description
        }
      })
      .then((res) => {
        this.$modal.open( ModalMovieDetail, {
          props: {
            videoURI: res.videoURI,
            // videoTitle: res.videoTitle,
            // videoDescription: res.videoDescription,
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
    },
    _modalPosition: function() {
    return {
      type: 'point',
          anchorLeft: '100px',
          left: '0',
         
      }
    },

  }

}
</script>
<style>
 .title {
    /* position: absolute;
    width: 700px;
    height: 101px;
    left: 516px; */


    font-family: Coda Caption;
    font-style: normal;
    font-weight: 800;
    font-size: 45px;
    line-height: 101px;
    color: white;
  }
  .overview {
    position: absolute;
    width: 846px;
    height: 190px;

    top: 250px;
    color: white;
    font-family: Coda Caption;
    font-style: normal;
    font-weight: 100;
    font-size: 19px;
    line-height: 38px;
  }

  .vote_average{
    position: absolute;
    width: 200px;
    height: 57px;
    color: white;

    top: 160px;

    font-family: Coda Caption;
    font-style: normal;
    font-weight: 800;
    font-size: px;
    line-height: 57px;
  }

  .release_date {
    position: absolute;
    width: 500px;
    height: 57px;
    top: 100px;
    color: white;

    font-family: Coda Caption;
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 57px;
  }
  .customlogo {
    width: 20%;
    position: absolute;
    top: 10px;
    left: 7%;
    display: flex;
    margin: auto;

  }
</style>