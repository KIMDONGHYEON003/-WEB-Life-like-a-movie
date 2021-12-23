<template>
  <div>
      <!-- <div class="div-custom">
        <h1>인생을 영화처럼,</h1><br>
        <h3>나만의 인생영화를 추천받아 보세요.</h3>
      </div> -->
    <body id="loginform">
      <div class="main">  	
        <input type="checkbox" id="chk" aria-hidden="true">

          <div class="signup">
            <form>
              <label for="chk" aria-hidden="true">Sign up</label>
              <input type="email" placeholder="Email" v-model.trim="credentials_signup.email">
              <input type="text" placeholder="ID" required="" v-model.trim="credentials_signup.username">
              <input type="password" placeholder="Password" v-model.trim="credentials_signup.password">
              <input type="password" placeholder="Password Confirm" v-model.trim="credentials_signup.passwordConfirmation" @keypress.enter="signup(credentials_signup)">
              <button @click="signup(credentials_signup)">Sign up</button>
            </form>
          </div>

          <div class="login">
            <form @submit.prevent="login(credentials_login)">
              <label for="chk" aria-hidden="true">Login</label>
              <input type="text" placeholder="ID" v-model.trim="credentials_login.username">
              <input type="password" placeholder="PW" v-model.trim="credentials_login.password" @keypress.enter="login(credentials_login)">
              <button @click.prevent="login(credentials_login)">Login</button>
            </form>
          </div>
      </div>
    </body>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

// const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'LoginForm',
  data: function () {
    return {
      credentials_login : {
        username: '',
        password: '',
      },
      credentials_signup : {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: '',
      }
    }
  },
  methods: {
    ...mapActions([
      'login',
      'signup',
    ]),
  }
}
</script>

<style scoped>
  body #loginform{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    font-family: 'Jost', sans-serif;
    background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  }
  .main{
    width: 350px;
    height: 500px;
    background: red;
    overflow: hidden;
    background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
  }
  #loginform #chk{
    display: none;
  }
  .signup{
    position: relative;
    width:100%;
    height: 100%;
  }
  label{
    color: #fff;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
  }
  #loginform input{
    width: 60%;
    height: 30px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  button{
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #573b8a;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
  }
  button:hover{
    background: #6d44b8;
  }
  .login{
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: .8s ease-in-out;
  }
  .login label{
    color: #573b8a;
    transform: scale(.6);
  }

  #chk:checked ~ .login{
    transform: translateY(-500px);
  }
  #chk:checked ~ .login label{
    transform: scale(1);	
  }
  #chk:checked ~ .signup label{
    transform: scale(.6);
  }




.div-custom {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 5%;
  left: 620px;

}
</style>