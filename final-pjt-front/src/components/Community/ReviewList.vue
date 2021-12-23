<template>
  <div id="ReviewList">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
    <div class="container-review" style="overflow:scroll; height:550px; overflow-x:hidden; margin-top:30px;  ">
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;">NO</div>
          <div class="col col-2" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;">작성자</div>
          <div class="col col-3" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;">제목</div>
          <div class="col col-4" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;">영화제목</div>
        </li>
      </ul>
      <hr>
    <review-list-item
      v-for="reviewList in reviewLists"
      :key="reviewList.id"
      :reviewList="reviewList"
    ></review-list-item>
    </div>

  </div>
</template>


<script>
import ReviewListItem from '@/components/Community/ReviewListItem'
import {mapState} from 'vuex'

export default {
  name: 'ReviewList',
  components: {
    ReviewListItem
  },
  created: function () {
    this.$store.dispatch('LoadReviewLists')
  },
  computed: {
    ...mapState([
      'reviewLists'
    ])
  },
}
</script>

<style>
  

  .container-review {
    width: 1200px;
    margin-left: 10%;
    margin-right: 10%;
    padding-left: 10px;
    padding-right: 10px;
  }

  h2 {
    font-size: 26px;
    margin: 20px 0;
    text-align: center;
  }
  h2 small {
    font-size: 0.5em;
  }

  .responsive-table li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .responsive-table .table-header {
    background-color: #95A5A6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .responsive-table .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  }
  .responsive-table .col-1 {
    flex-basis: 10%;
  }
  .responsive-table .col-2 {
    flex-basis: 20%;
  }
  .responsive-table .col-3 {
    flex-basis: 45%;
  }
  .responsive-table .col-4 {
    flex-basis: 25%;
  }
  @media all and (max-width: 767px) {
    .responsive-table .table-header {
      display: none;
    }
    .responsive-table li {
      display: block;
    }
    .responsive-table .col {
      flex-basis: 100%;
    }
    .responsive-table .col {
      /* font-family: 'Cafe24Ssurround';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
      font-weight: normal;
      font-style: normal; */
      display: flex;
      padding: 10px 0;
    }
    .responsive-table .col:before {
      color: #6C7A89;
      padding-right: 10px;
      content: attr(data-label);
      flex-basis: 50%;
      text-align: right;
    }
  }

  .container-review::-webkit-scrollbar {
    width: 10px;
  }
  .container-review::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  .container-review::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
</style>