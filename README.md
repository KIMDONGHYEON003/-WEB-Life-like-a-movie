# Final pjt 

> ๐ฌ ์ํ ์ถ์ฒ ๋ฐ ์ปค๋ฎค๋ํฐ ์๋น์ค ๋ฑ์ ํฌํจํ ์ค์  ์๋น์ค ์ค๊ณ

<br>

[[_TOC_]]

## 0๏ธโฃ Intro

### ์ธ์์ ์ํ์ฒ๋ผ

๊ทธ ์๊ฐ์ ์ ํธํ๋ ์ํ๋ฅผ ์ ํํ์ฌ ์ฌ์ฉ์์ ์ ํ์ ๊ธฐ๋ฐํ ์ฅ๋ฅด์ ์ํ๋ฅผ ์ถ์ฒํด์ฃผ๋ฉด์ ํ๋ฃจํ๋ฃจ๋ฅผ ์ํ์ฒ๋ผ ์ด๊ธฐ๋ฅผ ๋ฐ๋ผ๋ ๋ง์์์ ์ฐฉ์๋์๋ค. 

<br>

### ํ๋ช ๋ฐ ํ์

#### NO LOOK PASS 

๋ณด์ง ์๊ณ  ํ์์๊ฒ ํจ์ค๋ฅผ ํ  ์ ๋๋ก ์๋ก๋ฅผ ๋ฏฟ๊ณ  ํธํก์ด ์ข๋ค๋ ์๋ฏธ์ด๋ค.

|  ํ์  |                     ์ญํ                      |                       REFERENCE                       |
| :----: | :------------------------------------------: | :---------------------------------------------------: |
| ๊น๋ํ |  Front-end, Back-end (Movie Detail Feature)  | [KIMDONGHYEON003](https://github.com/KIMDONGHYEON003) |
| ์ด์๋ฏผ | Front-end, Back-end (Recommendation Feature) |     [breathinlee](https://github.com/breathinlee)     |
| ์ต์ขํ |   Front-end, Back-end (Community Feature)    |  [Jonghyunchoi94](https://github.com/Jonghyunchoi94)  |



#### ์ธ๋ถ ์ญํ  ๋ถ๋ด

๊น๋ํ

- ์ ์ฒด ์ํ / ๊ตญ๋ด ์ํ / ์ธ๊ธฐ์ front ๊ตฌ์ฑ
- front ์ ์ฒด ์คํ์ผ ์์ 
- Movie Detail ํ์ด์ง front ์์ 

์ด์๋ฏผ

- Login / Signup ๊ธฐ๋ฅ ๊ตฌํ ๋ฐ front ๊ตฌ์ฑ
- ์ํ ์ถ์ฒ ์๋น์ค ๊ธฐ๋ฅ ๊ตฌํ ๋ฐ front ๊ตฌ์ฑ
- ๋ฉ์ธ ํ์ด์ง front ์์ 

์ต์ขํ

- API ํ์ฉ ๋ฐ์ดํฐ ์์ง 
- Movie Detail ํ์ด์ง ๊ตฌ์ฑ ๋ฐ Login ์ค๋ฅ ์์ 
- Community ํ์ด์ง ๊ธฐ๋ฅ ๊ตฌํ ๋ฐ front ๊ตฌ์ฑ
- ์ถ๊ฐ ๊ธฐ๋ฅ ๊ตฌํ(search ๊ธฐ๋ฅ/carousel/Detail ํ์ด์ง์ ํธ๋ ์ผ๋ฌ, ์ถ์ฐ ๋ฐฐ์ฐ ์ ๋ณด)

<br>

### ๊ฐ๋ฐํ๊ฒฝ

1. ์ํคํ์ฒ

   Django REST API ์๋ฒ & Vue.js

   

2. ํ๋ก์ ํธ ํ์ฉ ๋๊ตฌ

   Figma, ERD cloud, notion

   

3. ์ ์๊ธฐ๊ฐ

   2021/11/15 - 2021/11/25

<br>

### ํ์ ๊ธฐ๋ฅ

- admin ํ์ด์ง
- Database Seeding์ ํ์ฉํ ์ต์ 50๊ฐ ์ด์์ ๋ฐ์ดํฐ ํฌํจ
- ์ํ ์ถ์ฒ ์๊ณ ๋ฆฌ์ฆ
- ์ปค๋ฎค๋ํฐ 
  - ๋ก๊ทธ์ธํ ์ฌ์ฉ์๋ง ๊ธ ์กฐํ/์์ฑ ๊ฐ๋ฅ
  - ์์ฑ์ ๋ณธ์ธ๋ง ๊ธ ์์ /์ญ์  ๊ฐ๋ฅ
  - ๊ฒ์๊ธ์ ๋๊ธ ๊ธฐ๋ฅ
- ๊ธฐํ
  - ์ต์ 5๊ฐ ์ด์์ URL ๋ฐ ํ์ด์ง ๊ตฌ์ฑ
  - ๋ฉ์์ง ํ๋ก์์ํฌ ๋ฑ์ํตํ ์๋ฌ ํ์ด์ง ๊ตฌ์ฑ
  - Ajaxํ์ฉํ ๋น๋๊ธฐ ์์ฒญ

<br>

## 1๏ธโฃ Design Thinking

### ํ๋ฅด์๋

- ๋ค์ํ ์ฅ๋ฅด์ ์ํ ์ถ๊ตฌํ๋ MZ์ธ๋
- ๋ณต์กํ UI๋ฅผ ์ซ์ดํ๊ณ  ํธ๋ฆฌํ๊ฒ ์ํ๋ ์ํ์ ๋ํ ์ ๋ณด๋ฅผ ์ป๊ณ  ์ถ์
-  ์์ํ ์ํ๋ผ๋ ์๊ณ ํธ๊ณผ ๋ฑ์ฅ์ธ๋ฌผ์ ์ดํด๋ณด๊ณ  ์ํ ์ ํ

<br>

### ์ด๊ธฐ UI ํ๋กํ  ํ์

![prototype](README.assets/prototype.PNG)

<br>

### ๋ชฉํ ๊ธฐ๋ฅ

- [x] ์ฌ์ฉ์ ํ๋ ๊ธฐ๋ฐ ์ํ ์ถ์ฒ ์๋น์ค ์ ์ฉ
- [ ] ๋คํฌ๋ชจ๋์ ๊ฐ์ ํ๋ฉด ์ ํ ๋ฒํผ 
- [x] SearchBar ๊ตฌํ
- [x] ๊ตญ๋ด์ํ / ํด์ธ์ํ ๋ถ๋ฅ  => ์ธ๊ธฐ์ / ๊ตญ๋ด์ํ๋ก ๋ถ๋ฅ
- [x] ์๊ณ ํธ / ๋ฑ์ฅ์ธ๋ฌผ ๊ด๋ จ ์ ๋ณด ์ ๊ณต

<br>

### ์ํ ์ถ์ฒ ์๋น์ค

- ์ด์ํ ์๋์ปต์ ํตํด ํ์ํ ์ฅ๋ฅด๋ณ ์ํ ์ถ์ฒ
- ์์ API๋ฅผ ํ์ฉํ OST ๊ธฐ๋ฐ ์ํ ์ถ์ฒ
- ๋น๊ณ ๊ฒ์ ํตํ ์ํ ์ถ์ฒ
- ๋ฉ์ธ ํ์ด์ง์ ๋์์ง ์ํ ํฌ์คํฐ ํน์ ๋จ์ด๋ค์ ๋ํ์ฌ ํด๋ฆญํ๋ฉด ํด๋ฆญ ๊ฒฐ๊ณผ ๋ฐ์ํ์ฌ ์ํ ์ถ์ฒ

<br>

### ๋ฐ์ดํฐ ์์ง

TMDB API๋ฅผ ํ์ฉํ์ฌ ์ํ ๋ฐ์ดํฐ ์์ง

<br>

## 2๏ธโฃ ์ค์  ๊ตฌํ ์๋น์ค

### ์ปจ์

*์ํ๋ ์ข์ํ์ง๋ง, ์์ง ๋ชํํ ์๊ธฐ ์ทจํฅ์ ๋ชจ๋ฅด๋ MZ์ธ๋์๊ฒ ์ด์ํ ์๋์ปต์ ํตํด ์์ ์ด ์ ํธํ๋ ์ฅ๋ฅด๊ธฐ๋ฐ ์ํ๋ฅผ ์ถ์ฒํด์ฃผ๋ ์๋น์ค* 

<br>

### ERD

![nolookpass_erd](README.assets/nolookpass_erd-1637807602376.png)

<br>

### Front (Vue component ๊ตฌ์กฐ)

![vue๊ตฌ์กฐ](README.assets/vue๊ตฌ์กฐ.PNG)

<br>

### ์ค์  ๊ตฌํ ๊ธฐ๋ฅ

- [x] detail ํ์ด์ง์ โถ ํด๋ฆญ ์ ๋ชจ๋ฌ์ฐฝ ํ์ฉํ ํธ๋ ์ผ๋ฌ ์ฌ์
- [x] detail ํ์ด์ง์ ์ํ ๋ฑ์ฅ์ธ๋ฌผ ๊ด๋ จ ์์ธํ์ด์ง 
- [x] SearchBar ๊ฒ์ ๊ธฐ๋ฅ -> ๊ฒ์ ์ ์ฐ๊ด ๊ฒ์์ด ์ง์ 
- [x] Community ๊ธ ์์ฑ ์ ์ํ ๊ฒ์ ๊ธฐ๋ฅ -> ๊ฒ์ ์ ์ฐ๊ด ๊ฒ์์ด ์ง์ 
- [x] ์ด์ํ ์๋์ปต ํ์ฉํ ์ํ ์ถ์ฒ 

<br>

### ์ต์ข Web Page

![final_prototype](README.assets/final_prototype.PNG)

![final_prototype_1](README.assets/final_prototype_1.PNG)

<br>

## 3๏ธโฃ ํ์๊ธฐ๋ฅ

### Movie Page(์ ์ฒด ์ํ/๊ตญ๋ด ์ํ/์ธ๊ธฐ ์ํ)

Front end

- App.vue ํ์ผ์์ ๋ผ์ฐํฐ ๋งํฌ๋ฅผ ์ง์ ํ์ฌ ๊ฐ๊ฐ์ ํ์ด์ง๋ฅผ ํ์ํ  ์ ์๊ฒ ์ค์ 

```vue
<nav class="sidebar__menu">
  <router-link :to="{ name: 'AllMovies' }">์ ์ฒด์ํ</router-link>
  <router-link :to="{ name: 'KoreanMovies' }">๊ตญ๋ด์ํ</router-link>
  <router-link :to="{ name: 'PopularMovies' }">์ธ๊ธฐ์</router-link>
  <router-link :to="{ name: 'Recommend' }">Recommend</router-link> 
  <router-link :to="{ name: 'Community' }">Community</router-link>
  <router-link @click.native="logout" to="#">Logout</router-link>
</nav>
```

- ๊ฐ๊ฐ์ vueํ์ผ์ ์์ฑํ์ฌ name ์ค์  ํ NowPlaying.vue ํ์ผ์ importํ๊ณ  components๋ก `NowPlaying.vue`์ค์  ํ template์ `<now-playing>`์ถ๊ฐ

  - ์์) `AllMovies.vue` (KoMovies.vue & PopularMovies.vue ํ์ด์ง ๋์ผ)

  ```vue
  <template>
    <div id="allmovie">
      <h1>ALL</h1>
      <div class="scroll" style="overflow:scroll; height:850px; overflow-x:hidden;" >
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
  }
  ```

<br>

### Detail Page

Front end

- NowPlaying.vue ํ์ผ์ ์ํ๋ฅผ ํด๋ฆญํ์ ๋, detail ํ์ด์ง๋ก ์ด๋ํ  ์ ์๋๋ก ``` @click.prevent="LoadMovieDetail(movieCard)``` ์ props ์ถ๊ฐ
- ์ ์ญ์์ ๊ด๋ฆฌํ  LoadMovieDetail ํจ์ ์์ฑ ํ MovieDetail.vue์์ mapState import ์ค์ 

<br>

๐คฏ ์ด๋ ค์ ๋ ์ 

- axios์์ url์ ์ค์ ํ  ๋, url ๊ฒฝ๋ก๋ฅผ ์๋ชป ์ง์ ํด์ ์ค๋ฅ ๋ฐ์

- store/index.js ํ์ผ์์ LoadMovieDetail ํจ์๋ฅผ ์์ฑํ  ๋, ์์ฒญ ๋ฐ์ ์ ๋ณด๋ฅผ ์๋ชป ์ง์ ํ์ฌ ์ค๋ฅ ๋ฐ์

  => ํด๋น ์์ฒญ id๋ฅผ url์ ๋ฃ์ด์ฃผ์ด์ผ ์ํ ์ ๋ณด๋ฅผ ์ป์ ์ ์์

๐ข ํด๊ฒฐ๊ณผ์ 

- api ๊ฒฝ๋ก๋ฅผ ์ ๋๋ก ํ์ธํ์ง ์์ ์ค์์๊ธฐ ๋๋ฌธ์ ํ์ธ ํ ์์ 
- request.id๋ก ์์ฒญ๊ฐ์ ๋ณ๊ฒฝํ ๋ค url์ ์ถ๊ฐ

```js
LoadMovieDetail: function ({ commit }, request) {
  axios({
    url: `http://api.themoviedb.org/3/movie/${request.id}`,
    method: 'get',
    params: {
      api_key: process.env.VUE_APP_TMDB_API_KEY,
      language: 'ko-KR',
    }
  })
```

<br>

โ **detail ํ์ด์ง ๋ด ๋ฐฐ์ฐ ์ ๋ณด**

Front end

- ๋ฐฐ์ฐ ์ ๋ณด๋ฅผ ๋ฐ๊ธฐ ์ํด ์ ์ญ์์ LoadMovieCredits ํจ์ ์์ฑ

- ๊ฐ์ ธ์จ ์ ๋ณด๊ฐ castMembers ์ ๋ด๊ธธ ์ ์๋๋ก state์ mutation ์ค์ 

  ```js
  mutations: {
    LOAD_MOVIE_CREDITS: function (state, results) {
      state.castMembers = results
    },
  }
  
  actions: {
    LoadMovieCredits: function ({ commit }, request) {
      axios({
        url: `http://api.themoviedb.org/3/movie/${request.id}/credits`,
        method: 'get',
        params: {
          api_key: process.env.VUE_APP_TMDB_API_KEY,
          language: 'ko-KR',
        }
      })
      .then((res) => {  
        commit('LOAD_MOVIE_CREDITS', res.data.cast)
        router.push({name: 'MovieDetailAllMembers', params: {movieNumber : request.id}})
          })
      .catch((err) => {
        console.log(err)
      })
    },
  }
  ```

- `MovieDetailMembers.vue` ์ ๋ฐฐ์ฐ ํ ์ฌ๋์ฉ ๋ด๊ธธ ์ ์๋๋ก components/Movies ๊ฒฝ๋ก๋ก ํ์ผ ์์ฑ ํ ์์ ํด๋์ธ `MovieDetailAllMembers.vue`์ import ํ components์ ์ถ๊ฐํ๊ณ  template์ movie-detail-members ํ๊ทธ๋ฅผ ์ด์ฉํ์ฌ castMember ์ถ๊ฐ

  ```vue
  <template>
    <div>
      <h1>ACTORS</h1>
      <div class="scroll" style="overflow:scroll; height:850px; overflow-x:hidden; " >
        <div class="image-wrapper" style="width: 80%; ">
          <movie-detail-members
            v-for="castMember in castMembers"
            :key="castMember.id"
            :castMember="castMember"
            style="border-radius:200px;height:350px; margin:3%;"
  
          ></movie-detail-members>
        </div>
      </div>
    </div>
  </template>
  ```

<br>

### ์ถ์ฒ ์๊ณ ๋ฆฌ์ฆ

Back end

- DB์ ์ ์ฅ๋ ์ํ์์ ๋๋ค์ผ๋ก 8๊ฐ ์ ์ 
  - `random.sample`์ ํ์ฉํ์ฌ 8๊ฐ๋ฅผ ๋ฝ์ ํ `worldcup` ๋ชจ๋ธ์ ๋ฐ์ดํฐ ์ ์ฅ

Front end

- `axios`๋ฅผ ํ์ฉํ์ฌ ๋๋ค์ผ๋ก ๋ฝํ 8๊ฐ์ ์ํ์ ๋ํ ์ ๋ณด๋ฅผ ๋ฐ์์ค๊ณ  ๊ฐ ์ํ์ ๋ํ detail์ ๋ฐ์ ์ด
- ๋ฐ์ ์จ ์ ๋ณด๋ฅผ store์ ์ ์ฅํ์ฌ ์ ์ญ์์ ๊ด๋ฆฌ
- `worldcup.vue`์์ 8๊ฐ์ ์ํ ์ค 2๊ฐ์ฉ์ ๋๋ค์ผ๋ก ๋ฝ์์ ๋ณด์ฌ์ค
  - lodash์ `samplesize`ํ์ฉ

- ๊ฐ ๋ผ์ด๋์์ ์ฌ์ฉ์์ ์ ํ์ ์ ์ฅํ์ฌ ๊ฐ์ฅ ๋ง์ด ๋์จ ์ฅ๋ฅด๋ฅผ ๊ณ์ฐํ์ฌ ๊ทธ ์ฅ๋ฅด์ ํด๋นํ๋ ์ํ 3๊ฐ ์ถ์ฒ
  - ์ํ ์ค ์ฌ๋ฌ ๊ฐ์ ์ฅ๋ฅด๋ฅผ ๊ฐ๊ณ  ์๋ ๊ฒ ์กด์ฌ
  - ์ฅ๋ฅด์ ๋ํ ์ ๋ณด๋ฅผ ๋ชจ๋ ๋ด์ ๊ฐ๊ฐ์ ์ฅ๋ฅด์ ๊ฐ์๋ฅผ ๊ณ์ฐํ์ฌ ๊ฐ์ฅ ๋ง์ด ๋์จ ์ฅ๋ฅด๋ฅผ ์ ์ (์ค๋ณต๋ ํ์ฉ)
  - `axios`๋ฅผ ํตํด `best genre` ๋ก ๋ฝํ ์ฅ๋ฅด(๋ค)์ ํด๋นํ๋ ์ํ๋ฅผ ๋ชจ๋ ๋ฐ์์ lodash์ `samplesize`๋ฅผ ๋ค์ ํ๋ฒ ์ฌ์ฉํ์ฌ ๋๋ค์ผ๋ก 3๊ฐ ์ ์ ํด์ ์ถ์ฒ 

<br>

๐คฏ ์ด๋ ค์ ๋ ์ 

- movies/serializers.py ์ `GenreListSerializer`์ fields์ id๋ฅผ ์ถ๊ฐํ์ง ์์ best genre์ ๋๋ผ๋ง, ์ฝ๋ฏน๊ณผ ๊ฐ์ ์ฅ๋ฅด์ ์ด๋ฆ๋ง ์ ์ฅ์ด ๋จ

  => ๊ฐ ์ฅ๋ฅด์ ํด๋นํ๋ id๋ฅผ ์ฐพ์ ๊ทธ id๋ก ์ฅ๋ฅด๋ณ ์ํ์ ์ ๋ณด๋ฅผ ๋ฐ์์ค๋ ์ด์ค ๊ณผ์ ์์ ๋ก์ง์ ๊ตฌํํ๋ ๊ฒ์ด ๋งค์ฐ ์ด๋ ค์ ์

- vue์์ ์ ์ญ์์ ๊ด๋ฆฌํ๋ ๋ฐ์ดํฐ์ ๊ฐ ์ปดํฌ๋ํธ์์ ๋ค๋ฃจ๋ ๋ฐ์ดํฐ์ ์ด๋ฆ์ ํผ๋

- ์ ์ญ์์ ๊ด๋ฆฌํ๋ 8๊ฐ์ ๋๋ค ์ํ๊ฐ ๋ด๊ธด `worldcup_movieLists`์์ ๋๋ค์ผ๋ก 2๊ฐ์ฉ ๊บผ๋ด์ผ ํจ  

- ์ํ๋ฅผ 2๊ฐ์ฉ ๊บผ๋ด๋ฉด์ ์ด๋ฏธ ์ฌ์ฉํ ๋ผ์ด๋์ ์ํ๋ ๊ธฐ์กด ๋ชฉ๋ก์์ ์ ๊ฑฐํด์ผ ํจ

- ํ ๋ผ์ด๋์์ 2๊ฐ์ ์ํ ์ค ํ ๊ฐ๋ผ๋ ์ ํ๋๋ฉด ๋ฐ๋ก ๋ค์ ๋ผ์ด๋๋ก ๋์ด๊ฐ์ผ ํจ

๐ข ํด๊ฒฐ๊ณผ์ 

- views.py์์ ํด๊ฒฐํ๋ ค๊ณ  ๋ก์ง์ ์ง๋ ์ค ์ฝ๊ฒ ํด๊ฒฐ๋์ง ์์ ํ์๋ค์๊ฒ ๋์์ ์์ฒญํ ํ ํ์๋ค์ ํผ๋๋ฐฑ์ผ๋ก ๋ค๋ฆ๊ฒ serializer์ ์ดํผ๊ณ  fields์ id๋ฅผ ์ถ๊ฐํจ

- ์ต๋ํ ๋ช์์ ์ผ๋ก ์ด๋ฆ์ ์ค์ ํ๋ ค๊ณ  ํ๊ณ , worldcup์์ ๋ค๋ฃจ๋ ๋ฐ์ดํฐ๋ฅผ ์ ์ญ์์ ๊ด๋ฆฌํ  ํ์๊ฐ ์๋ค๊ณ  ๋๊ปด `WorldCupList.vue`์์ ์ ๋ถ ์ค์ ํ์ฌ ์ฌ์ฉ

- ๋๋ค์ผ๋ก 2๊ฐ์ฉ ๊บผ๋ผ ๋, ์ผ์ชฝ/์ค๋ฅธ์ชฝ 4๊ฐ๋ฅผ ๋๋์ด์ ๊บผ๋ด๋ ค๋ ์๋๋ฅผ ํ์ง๋ง ์ฝ์ง ์์ ๊ฒฐ๊ตญ `lodash`๋ฅผ ํตํด ํด๊ฒฐ

- for๋ฌธ์ ์ฌ์ฉํ์ฌ`selectedTwoMovie`์ ๋ด๊ธด ์ํ๋ฅผ ๋ ์ค ํ๋๋ฅผ ์ ํ ํ `worldcup_movieLists`์์ ์ญ์ ํ๋ ๋ก์ง ์์ฑ

- `v-if`์ `v-show`๋ฅผ ํ์ฉํ์ฌ ์กฐ๊ฑด ๋ถ๊ธฐ๋ฅผ ํ ํ ์ฌ์ง์ ํด๋ฆญ ์ด๋ฒคํธ๋ก ๋ฉ์๋ ์ง์ 

- `watch`๋ฅผ ํตํด ๋ฐ์ดํฐ์ ๋ณํ๊ฐ ๊ฐ์ง๋๋ฉด ์ ํ๋ ์ํ๋ค์ ์ฅ๋ฅด๋ค๋ง ๋ฝํ ์ ์๋๋ก (๋ถ์กฑํ์ง๋ง) `WorldCupList.vue`์ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ์ฝ๋ ๊ตฌํ

  ```js
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
  }
  ```

<br>

### HomePage ๋ด ๋ฐ์ํ SearchBar

Front end

- `HomePage.vue` ๋ด methods๋ก ๋ก์ง ์์ฑ

  ```js
  methods: {
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
  ```

<br>

๐ฏ ์์ฌ์ ๋ ์ 

- ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉด์ ๋ง์ ๋ถ๋ถ์์ ๋ถ์กฑํจ์ ๋๊ผ์ง๋ง ๊ทธ ์ค ๊ฐ์ฅ ๋ฌธ์ ๋ก ๋๊ปด์ก๋ ๋ถ๋ถ์ด ๋น๋๊ธฐ์ ์ธ ์ฒ๋ฆฌ ๋ถ๋ถ
- ์กฐ๊ธ๋ง ๋ ๊ณต๋ถํ  ์๊ฐ์ด๋ ๊ธฐ๊ฐ์ด ์์๋ค๋ฉด ์ ์ฒด์ ์ผ๋ก ๋น๋๊ธฐ ์ฒ๋ฆฌ๋ฅผ ํด์ ์กฐ๊ธ ๋ ์ฌ์ฉ์ ๊ฒฝํ ๋ถ๋ถ์์ ํฅ์ ์ํฌ ์ ์์์ ํ๋ฐ ์ด ์ ์ด ๋งค์ฐ ์์ฌ์

<br>

### ์ปค๋ฎค๋ํฐ ๋ฆฌ๋ทฐ ์์  & ๋๊ธ ์์ฑ ํ๋ฉด ์ด๋ ๊ตฌ์ฑ

Front end

- ์๋ก๊ณ ์นจ์ ๋๋ฅด์ง ์๊ณ ๋ ๋ฐ๋ก ๋ฐ์๋  ์ ์๋๋ก ์ ์ญ์์ ๋ก์ง ์์ฑ

  ```js
  // sweetalert2 ํจํค์ง๋ฅผ ์ด์ฉํด ์ฌ์ฉ์ ๊ฒฝํ ์์น
  actions: {
    // ์์  ๋ก์ง
    UpdateReview: function ({commit}, data) {
      if (!data.title) {
        data.title = this.state.reviewDetail.title
      }
      if (!data.content) {
        data.content = this.state.reviewDetail.content
      }
      if (!data.movie) {
        data.movie = this.state.reviewDetail.movie
      }
      if (data.rank === 0) {
        data.rank = this.state.reviewDetail.rank
      }
      axios({
        url: `${SERVER.URL}${SERVER.ROUTES.review}${this.state.reviewDetail.id}/`,
        method: 'put',
        data,
        headers: this.getters.config  
      })
      .then((res) => {
        Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            commit('UPDATE_REVIEW', res.data)   
            window.location.reload(false) 
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })  
    },
    // ๋๊ธ ์์ฑ
    CreateComment: function ({commit}, request) {
      console.log(commit)
      axios({
        url: `${SERVER.URL}${SERVER.ROUTES.review}${this.state.reviewDetail.id}/comments/`,
        method: 'post',
        data: request,
        headers: this.getters.config  
      })
      .then(() => {  
        window.location.reload(false)
        router.push({ name: 'ReviewDetail', params: { reviewNumber: this.state.reviewDetail.id } })
        })
      .catch((err) => {
        console.log(err)
      })  
    },
  }
  ```

<br>

๐คฏ ์ด๋ ค์ ๋ ์ 

- ์๋ก๊ณ ์นจ์ ํด์ผ ์์ ๊ณผ ๋๊ธ์ด ๋ฐ์๋จ

๐ข ํด๊ฒฐ๊ณผ์ 

- ๋๊ธ ์์ฑํ๊ณ  ์ ์ถ์ ํ๋ ์๊ฐ reloadํ  ์ ์๋๋ก`window.location.reload(false)`๋ก์ง ๊ตฌํํ์ฌ ๋ฐ๋ก ๋ฐ์๋  ์ ์๋๋ก ํจ
- ์์ ์๊ธฐํ๋ ๋น๋๊ธฐ ์ฒ๋ฆฌ์์ ์์ฌ์ด ๋ถ๋ถ์ด ์๊ธฐ๋ ํ์ผ๋ ์ฒ์ ํ๋ ๋ถ๋ถ์ผ๋ก์จ ์ต์ ์ ๋คํจ

<br>

## 4๏ธโฃ ๋๋ ์ 

**๊น๋ํ**

ํ๋ก์ ํธ์ ๋ํ ์ด์ผ๊ธฐ๋ฅผ ๋ฃ๊ณ  ๋ฐ๋ก UI์ ERD ์์์ ์์ํ๋ค. vue ์์์ด ์์๋  ๋ ์ฏค ํ์์ด ์ทจ์์ด ๋์ด์ ๋ค๋ฅธ ํ์ ํฉ๋ฅํ๊ฒ ๋์๋ค.  ํ๋ก์ ํธ๋ฅผ ๊ณผ์ฐ ์ ์ถ์ผ๊น์ง ๋๋ผ ์ ์์๊น๋ผ๋ ๋ง๋งํจ ๋๋ฌธ์ ๊ต์ฅํ ๋ถ๋ฌ์ ๋ค. ์๋ก์ด ํ์ ํฉ๋ฅํ์ฌ ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉด์ ๊ฒฝ๋ก, ๋ณ์ ์ค์ , ๊ผผ๊ผผํจ์ ์ค์์ฑ์ ๋๊ผ๋ค. ๊ฒฝ๋ก๋ฅผ ์ ํํ ํ์ธํ์ง ์์์ ํ์ด์ง๊ฐ ์์ ์์ฑ์ด ๋์ง ์๋ ์ค๋ฅ๋ฅผ ๊ฒฝํํ๊ธฐ ๋๋ฌธ์ด๋ค. ๊ทธ๋ฆฌ๊ณ  ์ฝ๋๊ฐ ๋์ด๋  ์๋ก ๋ณ์๋ช ์ค์ ์ด ๊ต์ฅํ ์ค์ํ๋ค. ์ฝ๋๊ฐ ๊ธธ๊ธฐ ๋๋ฌธ์ ๋ณ์๋ช์ ์ ๋๋ก ์ค์ ํ์ง ์์ผ๋ฉด ๋์ค์ ์์๋ณผ ์๊ฐ ์์๋ค. ์์ผ๋ก๋ ์ข ๋ ๊ผผ๊ผผํ๊ฒ ๊ฒฝ๋ก๋ฅผ ํ์ธํ๊ณ  ๋ณ์๋ช์ ๋๊ตฌ๋ ์์๋ณผ ์ ์๊ฒ ์ค์ ํ๋๋ก ํด์ผ๊ฒ ๋ค. ๊ธฐ๋ฅ ๊ตฌํ์ด ์ด๋์ ๋ ์์ฑ๋ ์ดํ UI๋ฅผ ๊พธ๋ฏธ๋ ์์์ ํ๋ค. UI๋ฅผ ๊ฑฐ์ ๊พธ๋ฏธ์ง ์๊ณ  ์งํํ๊ธฐ ๋๋ฌธ์ ๋ถ์ํ ๋ง์์ด ์์์ง๋ง UI๊ฐ ์ด๋์ ๋ ๊ตฌ์ฑ๋ ํ์ '๋์ด ๋๊ธด ๋๋๊ตฌ๋' ๋ผ๋ ์๊ฐ์ ํ๋ค. ํ๋ก์ ํธ๊ฐ ์๋ฃ๋๊ณ  ๋  ์๊ฐ์ ๋ฟ๋ฏํจ์ด์๋ค.

<br>

**์ด์๋ฏผ**

์ฒ์ ์์ํ์ ๋๋ ๊ธฐ๊ฐ์ด ์ฌ์ ์๋ค๊ณ  ์๊ฐํ์ง๋ง, ํ๋ก์ ํธ๋ฅผ ์งํํ๋ค๋ณด๋ ์ฒ์ ์น ํ๋ก์ ํธ๋ฅผ ์งํํ๋ ๋์๊ฒ ๋๋ฌด๋ ์งง์ ๊ธฐ๊ฐ์์ ๋๊ผ๋ค. ์ฝ๋๋ฅผ ์์ฑํ๊ธฐ ์ ์ ์ต๋ํ ๊ผผ๊ผผํ๊ฒ ๊ตฌ์์ ํ๊ณ  ์์ํ๋ ค๊ณ  ๋ธ๋ ฅํ์ง๋ง, ํ๋ ๋์ค ํ์๋ค์ ๋ค์ํ ์์ด๋์ด๋ ๋ฌผ๋ก , ์์์น ๋ชปํ ๋ณ์, ๋ก์ง ๊ตฌํ์ ์ด๋ ค์ ๋ฑ ๋ค์ํ ์ํฉ๋ค๋ก ์ธํด ๋ง์ด ๋ฌ๋ผ์ก๋ค. ๊ทธ๋ฌ๋ค๋ณด๋ ๋์ค์ Front์ ๋ฐฐ์นํ๋ ๋ฐ ์์ด์, ๋ค๋ฅธ ๊ธฐ๋ฅ์ ๊ตฌํํ๋ ๋ฐ ์์ด์ ์๊ฐ์ด ์๊ฐ๋ณด๋ค ๋ง์ด ์์๋์ด MVP์ ERD ์ค์ ์ ๋ง์ ์๊ฐ์ ํฌ์ํด์ผ ํ๋ค๋ ๊ฒ์ ์ค์์ฑ๋ ์์ผ ๋ค์ ๋๊ผ๋ค. 

์๊ฐ๋งํผ ์๋๊ฐ ๋์ง์์ ์กฐ๊ธํจ๊ณผ ์์ํจ๋ ๋๊ผ๊ณ , ์ง์  ๊ตฌํํ ๊ฒ์ด ๋์ ๋ณด์ด๋ ๊ฒฐ๊ณผ๋ก ๋ํ๋ ๋ง๋ก ์ค๋ชํ  ์ ์๋ ๋ฟ๋ฏํจ๋ ๋๊ผ๊ณ , ํ์์ ์ค์์ฑ๋ ํฌ๊ฒ ๋๊ผ๋ค. ์ฒซ ๋ฒ์งธ ์น ํ๋ก์ ํธ๋ฅผ ํ ๋จ์ด๋ก ์ค๋ชํ๋ฉด ๋ค์ํ ๊ฐ์ ์ ๊ณต์กด์ด ์๋๊น ์ถ๋ค. ๋ํ ๊ธฐ๋ฅ ๊ตฌํ์ ์ํด ๋ค์ํ ๋ด์ฉ์ ๊ณต๋ถํ๊ณ  ์ ์ฉํด๋ณด๋ฉด์ vue.js ์ ๋ํด ์กฐ๊ธ ๋ ์๊ฒ ๋์๋ค. ๊ฐ๊ฐ์ ์ฝ๋๋ฅผ ๊ตฌํํ ๋ฐ ๋ชํํ ์ด์ ๊ฐ ์๊ฒผ๊ณ , vuex์ ์ฌ์ฉ ์ฌ๋ถ์ ๋ํด ์ค์ค๋ก ์ฝ๊ฐ์ ํ๋จํ  ์ ์๊ฒ ๋์๋ค. ๋คํํ ๊ฒฐ๊ณผ๊ฐ ๋ง์กฑ์ค๋ฌ์์ ์ด ์ ์ ๊ณ ํต์ค๋ฌ์ด ๊ณผ์ ์ด ์๋ฆ๋ต๊ฒ ํฌ์ฅ์ด ๋์๋ค.๐ ์ด์  ๋๋ ํ๋ก์ ํธ ํด๋ดค๋ค๋ผ๊ณ  ํ  ๋งํ ์ด๋ฒ ํ์ด๋ ํ๋ก์ ํธ.. ๋๋ฆ ์ฑ๊ณต์ ์๋๋ค...

<br>

**์ต์ขํ**

์ฒ์ ๊ฒฝํํ๋ ์น ํ๋ก์ ํธ ๋ถ์กฑํ์ง๋ง ํ์๋ค๊ณผ ํจ๊ป ์๊ฐ์ ๊ฐ์๋ฃ์ด ์ต์ ์ ๋คํ๋ค. ์ค๋ฅ๋ฅผ ์ฒ๋ฆฌํ๋ฉด์ ์ค์ค๋ก ์ฑ์ฅํจ๋ ๋๊ผ๊ณ , ๋ถ์กฑํ ๋ถ๋ถ๊ณผ ๊ณต๋ถ์ ํ์์ฑ์ ๋ํด์๋ ๋๊ผ๋ค. 

๊ทธ๋๋ ๊ฐ์ฅ ํฌ๊ฒ ์ป์ด๊ฐ๋ ๋ถ๋ถ์ด ์น ๊ฐ๋ฐ์ ์ ์ฒด์ ์ธ ํ๋ฆ์ ์ด๋ ์ ๋ ํ์ํ  ์ ์์๋ค๋ ์ ์ด ์๋๊น ์ถ๋ค. ์ฒซ ํ๋ก์ ํธ๋ฅผ ์ด์ฌํ ๋ธ๋ ฅํ ๋๋ถ์ ๋ค์ ํ๋ก์ ํธ ๋๋ ์ด๋ ํ ๋ถ๋ถ์ ์ค์๋ฅผ ์ฃผ์ํด์ผ ํ๋์ง๋ ๋ช๊ฐ์ง ์์๊ฐ๋ ๊ณ๊ธฐ๊ฐ ๋์๋ค. ํ์์ ํ๋ฉด์ ์๊ฐ์ด ์ง๋ ์๋ก ์ ๋ง๋ ๊ฒ์ด ๋๊ปด์ ธ ์ข์๊ณ , ์ด ๋๋์ ์์ง ๋ง๊ณ  ์ด์ด๋๊ฐ์ผ๋ฉด ํ๋ ๊ฒ์ด ๊ฐ์ธ์ ์ธ ๋ฐ๋จ์ด๋ค. 1ํ๊ธฐ ๋์ ์ด์ฌํ ๋ฐฐ์ ๊ณ , ์ด์ฌํ ์ด์๋ ๊ฒ ๊ฐ๋ค. ํ์๋ค ๋ชจ๋ ์ข์ ๊ณณ ์ทจ์งํด์ ๊ฐ๋ฐ์๋ก์จ ์ฑ๊ณตํ์ผ๋ฉด ์ข๊ฒ ๋ค. ๋ฌผ๋ก  ๋๋ ์ข์๋ฐ ๊ฐ์ผ๋ฉด ์ข๊ฒ ๋ค....

