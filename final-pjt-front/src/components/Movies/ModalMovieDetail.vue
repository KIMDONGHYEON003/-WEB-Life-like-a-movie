<template>
  <div id="modalmovie">
    <iframe :src="videoURI" frameborder="0" width="700" height="500"></iframe>
    <!-- <h2>{{ videoTitle | stringUnescape }}</h2>
    <p>{{ videoDescription | stringUnescape }}</p> -->
  </div>
</template>


<script>
import _ from 'lodash'

export default {
  name: 'ModalMovieDetail',
  props: ['videoURI',
          // 'videoTitle',
          // 'videoDescription',
          ],
  filters: {
    stringUnescape: function (rawText) {
      return _.unescape(rawText)
    }
  },
}
</script>

<style scoped>
  #modalmovie {
    position: absolute;
    top: 100%;
    left: 100%;
  }
</style>