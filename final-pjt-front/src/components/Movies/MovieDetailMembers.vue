<template>
  <div class="medianowplaying">
      <div class="overlay"></div>
      <img :src="'http://image.tmdb.org/t/p/w500/' + castMember.profile_path">
      <div class="image-details">
        <p style="font-size:20px; font-weight:bold;">{{ castMember.original_name }}</p>
        <!-- <hr style="width:90%; margin-left:10px;">
        <br>
        <p style="font-size:10px; text-align:left; line-height: 200%;">{{ movieCard.overview }}</p> -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'MovieDetailMembers',
  props: {
    castMember: Object,

  },
}
</script>

<style>

</style>