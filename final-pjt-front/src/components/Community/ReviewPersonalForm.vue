<template>
  <div>
    <div class="reviewformbutton">
      <div>
        <router-link :to="{ name: 'ReviewInputForm' }" class="horizontal"><span class="text">Create</span></router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Community' }" class="horizontal"><span class="text">All</span></router-link>
      </div>
    </div>   
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>