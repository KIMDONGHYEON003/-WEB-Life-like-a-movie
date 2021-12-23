<template>
  <div>
    <h1>Recommend</h1>
    <button class="moverecommendbtn" @click="moveToWorldCup">추천 서비스로 이동</button>
  </div>
</template>

<script>

export default {
  name: 'Recommend',
  data: function () {
    return {
      
    }
  },
  methods: {
    moveToWorldCup: function () {
      this.$router.push({ name: 'WorldCup' })
    },
  },
}
</script>

<style>
.moverecommendbtn {
  position: absolute;
  top: 300px;
  left: 45%;
  width: 150px;
  height: 50px;
  text-align: center;
  background-color: #7178f8;
  color: white;
  margin: 5px auto;
  display: block;
  border: none;
  padding: 10px 10px;
  font-weight: bold;
  border-radius: 10px;
}
</style>