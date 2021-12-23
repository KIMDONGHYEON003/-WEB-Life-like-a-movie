<template>
  <div>
    <div v-if="!finish">
      <div v-if="!isclick">
        <button id="startbtn" class="startrecommendbtn" @click="pickTwoMovie">시작</button>
      </div>
      <div v-if="isclick">
        <button class="custombtn">Pick One</button>
        <div class="worldcupform">
          <ul v-for="movie in selectedTwoMovie" :key="movie.idx">
            <img class="worldcupimg worldcupimg:hover" @click="select(movie)" :movie="movie" :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path">
          </ul>
        </div>
      </div>
    </div>
    <div v-if="finish">
      <button class="recommendbtn" @click="callRecommendMovie">결과보기!</button>
      <div v-show="resultclick">
        <div class="resultbody">
          <input type="radio" name="position" checked />
          <input type="radio" name="position" />
          <input type="radio" name="position" />
          <main id="resultcarousel">
            <div class="resultitem" v-for="result in results" :key="result.idx">
              <img class="resultimg" :result="result" :src="'http://image.tmdb.org/t/p/w500/' + result.poster_path">
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
import _ from 'lodash'
import axios from 'axios'
import SERVER from '@/api/drf.js'

export default {
  name: 'WorldCupList',
  data: function () {
    return {
      resultclick: false,
      isclick: false,
      selectedTwoMovie : [],
      selectedMovie: [],
      finish: false,
      best_genre: [],
      random_result: [],
      results: [],
    }
  },
  methods: {
    pickTwoMovie: function() {
      const movie = _.sampleSize(this.$store.state.worldcup_movieLists, 2)
      this.selectedTwoMovie = movie
      this.isclick = true 
    },
    ...mapActions([
      'logout',
    ]),
    select: function (movie) {
      this.selectedMovie.push(movie)
      for (let i = 0; i < 2; i ++) {
        const index = this.$store.state.worldcup_movieLists.indexOf(this.selectedTwoMovie[i]);
        this.$store.state.worldcup_movieLists.splice(index, 1)
      }
      this.pickTwoMovie()
      console.log(this.selectedMovie)
      console.log(this.$store.state.worldcup_movieLists)
    },
    moveToRecommend: function () {
      this.$router.push({ name: 'Recommend' })
    },
    callRecommendMovie: function () {
      this.best_genre.forEach(code => {
        const headers = this.$store.getters.config
        axios({
          url: SERVER.URL + SERVER.ROUTES.genre_movie + `${code}`, 
          method: 'get',
          headers,
        })
        .then((res) =>[
          this.random_result.push(res.data)
        ])
      })
      const filterRandomResult = this.random_result.flat();
      const movie = _.sampleSize(filterRandomResult, 3)
      this.results = movie
      this.resultclick = true
    }
  },
  watch: {
    selectedMovie: function() {
      if (this.selectedMovie.length === 4) {
        const arr = [];
        for (let i = 0; i < 4; i ++) {
          arr.push(this.selectedMovie[i].genres)
        }
        const filterArr = arr.flat();
        const genre = [];
        for (let i = 0; i < filterArr.length; i ++) {
          genre.push(filterArr[i]['id'])
        }
        const setGenre = new Set(genre);
        const genreArr = Array.from(setGenre);
        var count = [];
        for (let j = 0; j < genreArr.length; j ++) {
          var result = genre.filter(n => n === genreArr[j]).length;
          count.push(result);
        }
        let maxCount = Math.max.apply(null, count);
        var indices = [];
        var idx = count.indexOf(maxCount);
        while (idx != -1) {
          indices.push(idx);
          idx = count.indexOf(maxCount, idx + 1);
        }
        // console.log(indices)
        for (let i = 0; i < indices.length; i ++) {
          var maxGenre = genreArr[indices[i]]
          this.best_genre.push(maxGenre)
        }
        // this.best_genre = genreArr[count.indexOf(maxCount)]
        console.log(this.best_genre)
        this.finish = true
      }
    }
  },
}
</script>

<style>

.startrecommendbtn {
  position: absolute;
  top: 300px;
  left: 45%;
  width: 100px;
  height: 50px;
  text-align: center;
  background-color: #7178f8;
  color: white;
  margin: 5px auto;
  display: block;
  border: none;
  padding: 10px 10px;
  font-weight: bold;
  border-radius: 10px;
}

.worldcupform {
  position: absolute;
  width: 1200px;
  height: 550px;
  background-color:#c5c4c4;
  top: 20%;
  /* left: 33%; */
  left: 10%;
  opacity: 0.8;
}

.worldcupimg {
  width: 35%;
  height: 450px;
  z-index: 0;
  margin: 50px 80px;
  padding: 10px 10px;
  float: left;
  }

.worldcupimg:hover {
  background-color: rgb(70, 68, 68);
}

.resultimg {
  width: 80%;
  height: 85%;
  margin: 30px 20px;
  padding: 10px 10px;
  float: left;
}

.custombtn {
  width: 200px;
  text-align: center;
  background-color: #7178f8;
  color: white;
  margin: 15px auto;
  display: block;
  border: none;
  padding: 10px 10px;
  font-weight: bold;
  border-radius: 10px;
}

.resultbody {
  height: 500px;
  margin-top: 20px;
  display: grid;
  grid-template-rows: 500px 200px;
  grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
  align-items: center;
  justify-items: center;
}

main#resultcarousel {
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  --items: 5;
  --middle: 3;
  --position: 1;
  pointer-events: none;
}

.resultitem {
  position: absolute;
  width: 500px;
  height: 600px;
  /* background-color: #b1b1b1; */
  background-color: #2C272E;
  opacity: 0.9;
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-10deg * var(--r)))
    translateX(calc(-300px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));
}

.resultitem:nth-of-type(1) {
  --offset: 1;
}
.resultitem:nth-of-type(2) {
  --offset: 2;
}
.resultitem:nth-of-type(3) {
  --offset: 3;
}


input:nth-of-type(1) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
input:nth-of-type(1):checked ~ main#resultcarousel {
  --position: 1;
}

input:nth-of-type(2) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
input:nth-of-type(2):checked ~ main#resultcarousel {
  --position: 2;
}

input:nth-of-type(3) {
  grid-column: 4 /5;
  grid-row: 2 / 3;
}
input:nth-of-type(3):checked ~ main#resultcarousel {
  --position: 3;
}

input[type='radio']:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #d1d3d1;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
}

input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #7178f8;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
}

.recommendbtn {
  position: absolute;
  top: 300px;
  left: 45%;
  width: 150px;
  text-align: center;
  background-color: #7178f8;
  color: white;
  margin: 5px auto;
  display: block;
  border: none;
  padding: 10px 10px;
  font-weight: bold;
  border-radius: 10px;
}
</style>