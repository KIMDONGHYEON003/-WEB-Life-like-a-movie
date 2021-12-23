<template>
  <div>
    <h1>Create Your Review</h1>
    <body id="reviewinputform">
      <div class="mainreviewinputform">
        <div class="container-reviewinput">
          <form @submit.prevent="CreateReview(info)">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Single+Day&display=swap" rel="stylesheet">
            <div style="float:left; margin-right:50px;">
              <div class="review-content">
                <label for="">제목</label>
              </div>
              <div class="review-content">
                <input type="text" v-model.trim="info.title" style="opacity: 0.5;">
              </div>
              <div class="review-content">
                <label for="">내용</label>
              </div>
              <div class="review-content">
                <textarea name="" id="" rows="15" v-model.trim="info.content" style="opacity: 0.5;"></textarea>
              </div>
            </div>
            <div style="float:right; margin-left:50px">
              <div class="review-content">
                <label for="">영화 제목</label> 
              </div>
              <div class="review-content">
                <!-- <input type="search" v-model.trim="info.movie">  -->
                <autocomplete
                  :search="search"
                  placeholder="Search Movies"
                  aria-label="Search Wikipedia"
                  :get-result-value="getResultValue"
                  class="searchbar"
                  style="opacity: 0.5;"
                ></autocomplete>
              </div>
              <div class="review-content" style="margin-top:50px; te">
                <label for="">평점</label>
              </div>  
              <div class="rating-css">
                <div class="star-icon">
                  <input type="radio" name="rating1" id="rating1">
                  <label for="rating1"><i class="fa fa-star" @click="onClickRank(5)"></i></label>
                  <input type="radio" name="rating1" id="rating2">
                  <label for="rating2"><i class="fa fa-star" @click="onClickRank(4)"></i></label>
                  <input type="radio" name="rating1" id="rating3">
                  <label for="rating3"><i class="fa fa-star" @click="onClickRank(3)"></i></label>
                  <input type="radio" name="rating1" id="rating4">
                  <label for="rating4"><i class="fa fa-star" @click="onClickRank(2)"></i></label>
                  <input type="radio" name="rating1" id="rating5">
                  <label for="rating5"><i class="fa fa-star" @click="onClickRank(1)"></i></label>
                </div>
              </div>
              <div class="review-content" v-if="starScore" style="margin-top: 50px; margin-bottom: 50px;">
                <a class="reviewinputbutton">{{starScore}}점 체크하셨습니다.</a>
              </div>
              <div class="review-content" v-else style="margin-top: 50px; margin-bottom: 50px;">
                <a class="reviewinputbutton">점수를 체크해주세요.</a>
              </div>
              <a class="reviewinputbutton" @click.prevent="CreateReview(info)">작성</a>
            </div>
          </form>
        </div>
      </div>    
    </body>
  </div>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
import { mapActions } from 'vuex'

export default {
  name: 'ReviewInputForm',
  components: {
    Autocomplete
  },
  data: function () {
    return {
      info: {
        title: '',
        content: '',
        movie: '',
        rank: null,
      },
      starScore: ''
    }
  },
  methods: {
    ...mapActions([
      'CreateReview'
    ]),
    onClickRank: function (data) {
      this.starScore = 6 - data
      this.info.rank = 6 - data
    },
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
      this.info.movie = result.title
      return result.title
    },
  }

}
</script>

<style>
  #reviewinputform {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-width: 100vw;
    min-height: 100vh; */
  }

  .mainreviewinputform {
    margin: 30px auto;
    width: 1400px;
    height: 600px;
    /* background: rgb(30, 30, 31); */
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
  }

  .container-reviewinput  {
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

  .container-reviewinput label {
    font-family: 'Nanum Gothic', sans-serif;
    font-family: 'Single Day', cursive;
    font-size: 1.5rem;
  }

  .container-reviewinput input {
    width: 100%;
    height: 40px;
    font-size: 1.5rem;
    border-radius: 10px;
  }

  .container-reviewinput textarea {
    width: 100%;
    font-size: 1.5rem;
    border-radius: 10px;
  }

  .container-reviewinput button{
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

  .review-content {
    /* margin: 10px auto; */
    width: 500px;
  }

  .review-content label {
    color: white;
  }

  .rating-css {
  height: 70px;
  width: 400px;
  padding: 20px;
}
.rating-css div {
  color: #ffe400;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
 
}
.rating-css input {
  display: none;
}
.rating-css input + label {
  font-size: 60px;
  text-shadow: 1px 1px 0 #ffe400;
  cursor: pointer;
}
.rating-css input:checked + label ~ label {
  color: #838383;
}
.rating-css label:active {
  transform: scale(0.8);
  transition: 0.3s ease;
}

 .reviewinputbutton{
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


.reviewinputbutton:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}

.reviewinputbutton:after {
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

.reviewinputbutton:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}

.reviewinputbutton:active {
  top: 1px;
}

</style>