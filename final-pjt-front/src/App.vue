<template>
  <div id="app">
    <span v-if="isLoggedIn">
      <div class="area">
        <ul class="circles">
          <li v-for="(movie, idx) in MovieLists" :key="idx">
            <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" width="100%" height="100%">
          </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Rozha+One&display=swap" rel="stylesheet">
      <section class="banner">
        <label for="menu-control" class="hamburger">
          <i class="hamburger__icon"></i>
          <i class="hamburger__icon"></i>
          <i class="hamburger__icon"></i>
        </label>
        
        <input type="checkbox" id="menu-control" class="menu-control">
        
        <aside class="sidebar">
          
          <nav class="sidebar__menu">
            <div class="customtitle"><router-link :to="{ name: 'Home' }">인생을 영화처럼</router-link></div>
            <ul class="list-items limargin hanna">
              <li class="limargin"><router-link :to="{ name: 'AllMovies' }"><i class="fas fa-video"></i> 전체영화</router-link></li>
              <li class="limargin"><router-link :to="{ name: 'KoreanMovies' }"><i class="far fa-file-video"></i> 국내영화</router-link></li>  
              <li class="limargin"><router-link :to="{ name: 'PopularMovies' }"><i class="fas fa-film"></i> 인기작</router-link></li>
              <li class="limargin"><router-link :to="{ name: 'Recommend' }"><i class="far fa-thumbs-up"></i> Recommend</router-link> </li>  
              <li class="limargin"><router-link :to="{ name: 'Community' }"><i class="fas fa-user"></i> Community</router-link></li>  
              <li class="limargin"><router-link @click.native="logout" to="#"><i class="fas fa-sign-out-alt"></i> Logout</router-link></li>            
            </ul>
          </nav>
          
          <label for="menu-control" class="sidebar__close"></label>
          
          
        </aside> 
      </section>
      <section class="result_show">
        <router-view />
      </section>
      <!-- <footer>
        <p>CREATED BY NOLOOKPASS_CORPORATION</p>
      </footer>    -->
    </span>
    <span v-else>
      <login-form ></login-form>
    </span>
  </div>
</template>

<script>
import LoginForm from '@/components/Home/LoginForm.vue'
import { mapGetters, mapActions, mapState } from 'vuex'


export default {
  name: 'App',
  components: {
    LoginForm,
  },
  methods: {
    ...mapActions([
      'logout',
      'GetMovieLists',
    ])
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
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
  @import url(//fonts.googleapis.com/earlyaccess/hanna.css);

  .hanna  {
    font-family: 'Hanna', fantasy;
  }

  *{
      margin: 0px;
      padding: 0px;
  }

  .context {
      width: 100%;
      position: absolute;
      top:50vh;
      
  }

  .context h1{
      text-align: center;
      color: #fff;
      font-size: 50px;
  }


  .area{
      position: absolute;
      background: #2C272E;  
      background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
      width: 100%;
      height: 100%;
      z-index: -1;
      
    
  }

  .circles{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
  }

  .circles li{
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.2);
      animation: animate 25s linear infinite;
      bottom: -150px;
      
  }

  .circles li:nth-child(1){
      left: 25%;
      width: 80px;
      height: 80px;
      animation-delay: 0s;
  }


  .circles li:nth-child(2){
      left: 10%;
      width: 20px;
      height: 20px;
      animation-delay: 2s;
      animation-duration: 12s;
  }

  .circles li:nth-child(3){
      left: 70%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
  }

  .circles li:nth-child(4){
      left: 40%;
      width: 60px;
      height: 60px;
      animation-delay: 0s;
      animation-duration: 18s;
  }

  .circles li:nth-child(5){
      left: 65%;
      width: 20px;
      height: 20px;
      animation-delay: 0s;
  }

  .circles li:nth-child(6){
      left: 75%;
      width: 110px;
      height: 110px;
      animation-delay: 3s;
  }

  .circles li:nth-child(7){
      left: 35%;
      width: 150px;
      height: 150px;
      animation-delay: 7s;
  }

  .circles li:nth-child(8){
      left: 50%;
      width: 25px;
      height: 25px;
      animation-delay: 15s;
      animation-duration: 45s;
  }

  .circles li:nth-child(9){
      left: 20%;
      width: 15px;
      height: 15px;
      animation-delay: 2s;
      animation-duration: 35s;
  }

  .circles li:nth-child(10){
      left: 85%;
      width: 150px;
      height: 150px;
      animation-delay: 0s;
      animation-duration: 11s;
  }
  .circles li:nth-child(11){
      left: 25%;
      width: 100px;
      height: 150px;
      animation-delay: 0s;
      animation-duration: 20s;
  }
  .circles li:nth-child(12){
      left: 45%;
      width: 50px;
      height: 50px;
      animation-delay: 0s;
      animation-duration: 10s;
  }
  .circles li:nth-child(13){
      left: 95%;
      width: 200px;
      height: 300px;
      animation-delay: 0.5s;
      animation-duration: 20s;
  }
  .circles li:nth-child(14){
      left: 5%;
      width: 50px;
      height: 70px;
      animation-delay: 0.5s;
      animation-duration: 20s;
  }
  /* .circles li:nth-child(15){
      left: 60%;
      width: 70px;
      height: 110px;
      animation-delay: 0s;
      animation-duration: 15s;
  }
  .circles li:nth-child(16){
      left: 35%;
      width: 50px;
      height: 70px;
      animation-delay: 0s;
      animation-duration: 15s;
  }
  .circles li:nth-child(17){
      left: 70%;
      width: 80px;
      height: 140px;
      animation-delay: 0s;
      animation-duration: 25s;
  }
  .circles li:nth-child(18){
      left: 10%;
      width: 70px;
      height: 110px;
      animation-delay: 1s;
      animation-duration: 20s;
  }
  .circles li:nth-child(19){
      left: 20%;
      width: 50px;
      height: 70px;
      animation-delay: 1s;
      animation-duration: 25s;
  }
  .circles li:nth-child(20){
      left: 55%;
      width: 130px;
      height: 150px;
      animation-delay: 2s;
      animation-duration: 10s;
  } */


  @keyframes animate {

      0%{
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
      }

      100%{
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
      }

  }

  /* .. */

  .banner {
    /* min-height: 100%;
    width: 100%; */
    /* background: url("https://i.imgur.com/T57flD5.jpg");
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 60px;
    color: #fff; */
  }

  .hamburger {
    position: absolute;
    left: 30px;
    top: 30px;
    display: flex;
    height: 18px;
    width: 24px;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    -webkit-user-select: none;
      -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    z-index: 1;
  }
  .hamburger__icon {
    display: inline-block;
    height: 2px;
    width: 24px;
    background: #fff;
    border-radius: 2px;
  }

  .sidebar {
    height: 100vh;
    width: 400px;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    transform: translatex(-100%);
    transition: transform 0.4s ease-in-out;
    z-index: 5;
  }
  .sidebar__close {
    position: absolute;
    top: 50%;
    right: -30px;
    background: #fff;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.03);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translatex(-100%);
    cursor: pointer;
    transition: transform 0.4s ease-in-out 0.2s;
  }
  .sidebar__close::before, .sidebar__close::after {
    content: "";
    height: 2px;
    background: #898989;
    width: 24px;
    display: block;
    position: absolute;
  }
  .sidebar__close::after {
    transform: rotate(90deg);
  }
  .sidebar__menu {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    font-size: 36px;
    margin-top: 80px;
    margin-bottom: 80px;
    color: #898989;
  }
  .sidebar__menu a {
    color: currentcolor;
    text-decoration: none;
    transform: translatex(-80%);
    transition: transform 0.4s ease-in-out;
  }
  .sidebar__menu a::before {
    content: "";
    height: 2px;
    background: #898989;
    width: 120px;
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: translatex(-50%);
    opacity: 0;
    transition: transform 0.4s ease-in-out, opacity 0.4s linear;
  }
  .sidebar__menu a:hover::before {
    transform: translatex(0);
    opacity: 1;
  }
  .sidebar__menu a:nth-child(1) {
    transition-delay: 0.05s;
  }
  .sidebar__menu a:nth-child(2) {
    transition-delay: 0.1s;
  }
  .sidebar__menu a:nth-child(3) {
    transition-delay: 0.15s;
  }
  .sidebar__menu a:nth-child(4) {
    transition-delay: 0.2s;
  }
  .sidebar__menu a:nth-child(5) {
    transition-delay: 0.25s;
  }
  .sidebar__menu a:nth-child(6) {
    transition-delay: 0.3s;
  }
  .sidebar__social {
    display: flex;
    list-style: none;
    padding: 0;
  }
  .sidebar__social li {
    margin: 4px;
  }
  .sidebar__social a, .sidebar__social svg {
    display: inline-block;
    height: 18px;
    width: 18px;
  }

  .menu-control {
    display: none;
  }
  .menu-control:checked + .sidebar {
    transform: translatex(0);
  }
  .menu-control:checked + .sidebar .sidebar__close {
    transform: translatex(0) rotate(45deg);
  }
  .menu-control:checked + .sidebar .sidebar__menu a {
    transform: translatex(0);
  }

  /* footer {
    position: block;
    background: black;
    color: white;
    display: flex;
    bottom: 0px;
    height: 50px;
    justify-content: center;
    align-items: center;
  } */
 
  .customtitle {
  font-family: 'Nanum Brush Script', cursive;
  line-height: 60px;
  text-align: center;
  background: #303335;
  font-size: 50px;
  font-weight: 600;
  color: #f2f2f2;
  border-bottom: 2px solid #222;
}
.list-items {
  list-style: none;
}

.limargin {
  margin-bottom: 20px;
}




</style>