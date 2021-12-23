<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
    <main>
      <ol class="gradient-list">
        <li class="table-row" @click.prevent="LoadPersonalReviewDetail(reviewList)" >
          <div class="col col-1" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;" data-label="NO">{{ reviewList.id}}</div>
          <div class="col col-2" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;" data-label="작성자">{{ reviewList.user.username}}</div>
          <div class="col col-3" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;" data-label="제목">{{ reviewList.title}}</div>
          <div class="col col-4" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;" data-label="영화제목">{{ reviewList.movie}}</div>
        </li>   
      </ol>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ReviewPersonalListItem',
  props: {
    reviewList: Object,
  },
  methods: {
    ...mapActions([
      'LoadPersonalReviewDetail',
    ])
  }
}
</script>

<style>

</style>