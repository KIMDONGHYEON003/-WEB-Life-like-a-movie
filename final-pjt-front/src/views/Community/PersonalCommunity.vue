<template>
  <div id="community">
    <h1>MY COMMUNITY</h1>
    <review-personal-form></review-personal-form>
    <review-personal-list></review-personal-list>
  </div>
</template>

<script>
import ReviewPersonalForm from '@/components/Community/ReviewPersonalForm.vue'
import ReviewPersonalList from '@/components/Community/ReviewPersonalList.vue'

export default {
  name: 'PersonalCommunity',
  components: {
    ReviewPersonalForm,
    ReviewPersonalList
  }
}
</script>

<style>

</style>