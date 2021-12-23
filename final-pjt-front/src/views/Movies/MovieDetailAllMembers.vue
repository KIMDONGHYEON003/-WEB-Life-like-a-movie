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

<script>
import MovieDetailMembers from '@/components/Movies/MovieDetailMembers.vue'
import { mapState} from 'vuex'


export default {
  name: 'MovieDetailAllMembers',
  components: {
    MovieDetailMembers
  },
  computed: {
    ...mapState([
      'castMembers'
    ])
  },
}
</script>

<style>

</style>