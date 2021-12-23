<template>
  <div>
    <div class="reviewformbutton">
      <div>
        <router-link :to="{ name: 'ReviewInputForm' }" class="horizontal"><span class="text">Create</span></router-link>
      </div>
      <div>
        <router-link :to="{ name: 'PersonalCommunity' }" class="horizontal"><span class="text">Your</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewForm',
}
</script>

<style>
  :root {
  --base-color: rgba(255, 255, 255, 1);
  --hover-color: rgba(220, 120, 150, 1);
}

.reviewformbutton {
  display: flex;
  justify-content: right;
  margin-right:30%;
}


.horizontal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 300px;
  width: 60px;
  height: 30px;
  margin: 20px;
  border: 5px solid var(--base-color);
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
}
.horizontal > .text {
  position: relative;
  color: transparent;
  background-image: linear-gradient(90deg, var(--hover-color) 0%, var(--hover-color) 50%, var(--base-color) 50%, var(--base-color) 100%);
  background-repeat: repeat;
  background-size: 200%;
  background-position: 100% 0;
  -webkit-background-clip: text;
  background-clip: text;
  transition: background-position 300ms;
}
.horizontal::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--base-color);
  transform-origin: 100% 0;
  transform: scale3d(0, 1, 1);
  transition: transform 300ms;
}
.horizontal:hover .text {
  background-position: 0 0;
}
.horizontal:hover::before {
  transform-origin: 0 0;
  transform: scale3d(1, 1, 1);
}
</style>