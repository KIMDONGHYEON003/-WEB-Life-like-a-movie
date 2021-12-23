<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
    <div class="container-review" style="overflow:scroll; height:550px; overflow-x:hidden; margin-top:30px;">
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;">NO</div>
          <div class="col col-2" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;">작성자</div>
          <div class="col col-3" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;">제목</div>
          <div class="col col-4" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;">영화제목</div>
        </li>
      </ul>
      <hr>
    <review-personal-list-item
      v-for="reviewList in personalReviewLists"
      :key="reviewList.id"
      :reviewList="reviewList"
    ></review-personal-list-item>
    </div>
  </div>
</template>

<script>
import ReviewPersonalListItem from '@/components/Community/ReviewPersonalListItem.vue'
import {mapState} from 'vuex'

export default {
  name: 'ReviewPersonalList',
  components: {
    ReviewPersonalListItem
  },
  created: function () {
    this.$store.dispatch('LoadPersonalReviewLists')
  }, 
  computed: {
    ...mapState([
      'personalReviewLists',
    ])
  }
}
</script>

<style>

</style>