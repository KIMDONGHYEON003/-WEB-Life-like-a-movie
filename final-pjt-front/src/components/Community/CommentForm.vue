<template>
  <div>
    <div class="container-comment">
      <form>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Single+Day&display=swap" rel="stylesheet">
        <div class="comment-content">
          <label for="" style="color:white;">댓글 달기</label>
        </div>
        <div class="comment-content">
          <textarea name="" id="" rows="10" v-model.trim="info.content" style="background-color:#FBF3E4;" @keypress.enter="CreateComment(info)"></textarea>
        </div>
        <a class="commentbutton" @click.prevent="CreateComment(info)">작성</a>                    
      </form>
    </div>
  </div>
 
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CommentForm',
  data: function () {
    return {
      info: {
        content: '',
      }
    }
  },
  methods: {
    ...mapActions([
      'CreateComment'
    ]),
  },
}
</script>

<style>
  .container-comment  {
    width: 80%;
    height: 15px;
    /* background: #e0dede; */
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  .container-comment label {
    font-family: 'Nanum Gothic', sans-serif;
    font-family: 'Single Day', cursive;
    font-size: 1.5rem;
  }

  .container-comment textarea {
    width: 400px;
    height: 100px;
    font-size: 1.5rem;
    border-radius: 10px;
  }

  .container-comment button{
    width: 60%;
    height: 40px;
    margin: 30px auto;
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

  .commentbutton{
  width: 60%;
  height: 30px;
  margin: 10px auto;
  margin-top: 20px;
  justify-content: center;
  
  position: relative;
  background-color: black;
  border-radius: 4em;
  font-size: 16px;
  color: white;
  padding: 0.8em 1.8em;
  cursor:pointer;
  user-select:none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */
  left: 40%;
  top:20px;
}


.commentbutton:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}

.commentbutton:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}

.commentbutton:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}

.commentbutton:active {
  top: 1px;
}
</style>