<template>
  <div>
    <h1>READ {{reviewDetail.user.username}}'s REVIEW</h1>
    <body id="reviewinputform">
      <div class="mainpersonalreviewdetailform">
        <div class="container-reviewdetail">
          <form>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Single+Day&display=swap" rel="stylesheet">
            <div style="float:left; margin-right:50px;">
              <div class="review-content">
                <label for="">제목</label>
              </div>
              <div class="review-content">
                <input type="text" v-model.trim="reviewDetail.title" @input.prevent="changeTitle" style="opacity: 0.5;">
              </div>
              <div class="review-content">
                <label for="">내용</label>
              </div>
              <div class="review-content">
                <textarea name="" id="" rows="15" v-model.trim="reviewDetail.content" @input.prevent="changeContent" style="opacity: 0.5;"></textarea>
              </div>
            </div>
            <div style="float:right; width:500px; margin-left:50px;">
              <div class="review-content">
                <label for="">영화 제목</label> 
              </div>
              <hr>
              <div class="review-content">
                <input type="search" v-model.trim="reviewDetail.movie" @input.prevent="changeMovie" disabled style="background-color: transparent; border: none;"> 
              </div>
              <div class="review-content">
                <label for="">평점</label>
              </div>
              <hr>
              <div class="rating-css">
                <div class="star-icon">
                  <input type="radio" name="rating1" id="rating1">
                  <label for="rating1"><i class="fa fa-star" @click="onClickRankDetail(5)"></i></label>
                  <input type="radio" name="rating1" id="rating2">
                  <label for="rating2"><i class="fa fa-star" @click="onClickRankDetail(4)"></i></label>
                  <input type="radio" name="rating1" id="rating3">
                  <label for="rating3"><i class="fa fa-star" @click="onClickRankDetail(3)"></i></label>
                  <input type="radio" name="rating1" id="rating4">
                  <label for="rating4"><i class="fa fa-star" @click="onClickRankDetail(2)"></i></label>
                  <input type="radio" name="rating1" id="rating5">
                  <label for="rating5"><i class="fa fa-star" @click="onClickRankDetail(1)"></i></label>
                </div>
              </div>
              <div class="review-content" v-if="starScore" style="margin-top: 50px; margin-bottom: 50px;">
                <a class="personaldetailbutton">{{starScore}}점 체크하셨습니다.</a>
              </div>
              <div class="review-content" v-else style="margin-top: 50px; margin-bottom: 50px;">
                <a class="personaldetailbutton">{{reviewDetail.rank}}점 체크하셨습니다.</a>
              </div>
              <div class="submit-container">
                <div class="review-content">
                  <a class="personaldetailbutton" @click.prevent="UpdateReview(info)">수정</a>
                </div>
                <div class="review-content">
                  <a class="personaldetailbutton" @click.prevent="DeleteReview(info)" style="color: red;">삭제</a>
                </div>
              </div>   
            </div>                   
          </form>
        </div>
      </div>    
    </body>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: 'PersonalReviewDetail',
  data: function () {
    return {
      info: {
        title: '',
        content: '',
        movie: '',
        rank: 0,
      },
      starScore: '',
    }
  },
  computed: {
    ...mapState([
      'reviewDetail'
    ]),
  },
  methods: {
    ...mapActions([
      'UpdateReview',
      'DeleteReview'
    ]),
    onClickRankDetail: function (e) {
      this.starScore = 6 - e
      this.info.rank = 6 - e
      console.log(this.info.rank)
    },
    changeTitle: function (event) {
      this.info.title = event.target.value
    },
    changeContent: function (event) {
      this.info.content = event.target.value
    },
    changeMovie: function (event) {
      this.info.movie = event.target.value
    }
  }
}
</script>

<style>
  .mainpersonalreviewdetailform {
    /* margin: 50px auto;
    width: 700px;
    height: 1000px;
    background: rgb(95, 236, 213);
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000; */
    margin: 30px;
    /* margin-right: 50px; */
    width: 1300px;
    height: 600px;
    /* background: rgb(95, 236, 213); */
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
  
  }


  .container-reviewdetail  {
    width: 90%;
    height: 15px;
    /* background: #e0dede; */
    /* justify-content: center;
    display: flex; */
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  .container-reviewdetail label {
    font-family: 'Nanum Gothic', sans-serif;
    font-family: 'Single Day', cursive;
    font-size: 1.5rem;
  }

  .container-reviewdetail input {
    width: 100%;
    height: 40px;
    font-size: 1.5rem;
    border-radius: 10px;
  }
  

  .container-reviewdetail textarea {
    width: 500px;
    font-size: 1.5rem;
    border-radius: 10px;
  }

  

  .container-reviewdetail button{
    width: 80%;
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

  .submit-container {
    display: flex;
  }

  .submit-container button {
    width: 200px;
    height: 40px;
    background: red;
  }

  .review-content {
    margin: 10px auto;
  }

  .container-reviewdetail .star-wrapper {
    margin-right: 50px;
  }


  .personaldetailbutton{
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
  left: 30%;
  top:20px;
}


.personaldetailbutton:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}

.personaldetailbutton:after {
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

.personaldetailbutton:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}

.personaldetailbutton:active {
  top: 1px;
}
</style>