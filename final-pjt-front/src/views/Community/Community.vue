<template>
  <div id="community">
    <h1>COMMUNITY</h1>
    <review-form></review-form>
    <review-list></review-list>

  </div>
</template>

<script>
import ReviewForm from '@/components/Community/ReviewForm.vue'
import ReviewList from '@/components/Community/ReviewList.vue'

export default {
  name: 'Community',
  components: {
    ReviewForm,
    ReviewList
  }
}
</script>

<style>
  #community {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
  }
</style>