<template>
  <div>
    <h1>이상형 월드컵</h1>
    <world-cup-list>
    </world-cup-list>
  </div>
</template>

<script>
import WorldCupList from '@/components/Recommend/WorldCupList.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'WorldCup',
  data: function () {
    return {
    }
  },
  components: {
    WorldCupList,
  },
  methods: {
    ...mapActions([
      'GetWorldCupLists',
    ]),
  },
  computed: {
    ...mapState([
      'worldcup_movieLists',
    ]),
  },
  mounted: function () {
    this.GetWorldCupLists()
  },
}
</script>

<style>
.btn {
  width: 200px;
  display: flex;
  font-size: 20px;
  background-color: #7178f8;
  /* background-color: #355c7d; */
  color: white;
  margin: 50px auto;
  display: block;
  border: none;
  padding: 10px 10px;
  font-weight: bold;
}
</style>