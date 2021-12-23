import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Community from '@/views/Community/Community.vue'
import ReviewInputForm from '@/views/Community/ReviewInputForm.vue'
import ReviewDetail from '@/views/Community/ReviewDetail.vue'
import PersonalReviewDetail from '@/views/Community/PersonalReviewDetail.vue'
import PersonalCommunity from '@/views/Community/PersonalCommunity.vue'
import AllMovies from '@/views/Movies/AllMovies.vue'
import KoMovies from '@/views/Movies/KoMovies.vue'
import PopularMovies from '@/views/Movies/PopularMovies.vue'
import Recommend from '@/views/Recommend/Recommend.vue'
import WorldCup from '@/views/Recommend/WorldCup.vue'
import MovieDetail from '@/views/Movies/MovieDetail.vue'
import MovieDetailTrailer from '@/views/Movies/MovieDetailTrailer.vue'
import MovieDetailAllMembers from '@/views/Movies/MovieDetailAllMembers.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/community/create-review',
    name: 'ReviewInputForm',
    component: ReviewInputForm
  },
  {
    path: '/community/:reviewNumber',
    name: 'ReviewDetail',
    component: ReviewDetail
  },
  {
    path: '/community/:reviewNumber',
    name: 'PersonalReviewDetail',
    component: PersonalReviewDetail
  },
  {
    path: '/personal-community',
    name: 'PersonalCommunity',
    component: PersonalCommunity
  },
  {
    path: '/AllMovies',
    name: 'AllMovies',
    component: AllMovies
  },
  {
    path: '/KoreanMovies',
    name: 'KoreanMovies',
    component: KoMovies
  },
  {
    path: '/PopularMovies',
    name: 'PopularMovies',
    component: PopularMovies
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/worldcup',
    name: 'WorldCup',
    component: WorldCup
  },
  {
    // path: '/Movies/:movieNumber',
    path: '/movie/:movieNumber',
    name: 'MovieDetail',
    component: MovieDetail,
  }, 
  {
    path: '/movie/:movieNumber/moviedetailtrailer',
    name: 'MovieDetailTrailer',
    component: MovieDetailTrailer,
  },   
  {
    path: '/movie/:movieNumber/moviedetailmembers',
    name: 'MovieDetailAllMembers',
    component: MovieDetailAllMembers,
  },   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
