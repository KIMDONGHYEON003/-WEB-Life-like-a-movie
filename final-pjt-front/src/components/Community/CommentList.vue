<template>
  <div id="commentlist">
    <body class="commentlistbody" style="overflow:scroll; height:300px; overflow-x:hidden; position:fixed; right: 70px;">
      <div class="container-commentlist">
        <comment-list-item
          v-for="commentList in commentLists"
          :key="commentList.id"
          :commentList="commentList"
        ></comment-list-item>
      </div>  
    </body>
  </div>
</template>

<script>
import CommentListItem from '@/components/Community/CommentListItem.vue'
import { mapState} from 'vuex'

export default {
  name: 'CommentList',
  components: {
    CommentListItem
  },
  computed: {
    ...mapState([
      'commentLists'
    ])
  },
  // watch:{
  //   commentLists: function(){
  //     this.$forceUpdate();
  //     },
  // },
  created: function () {
    this.$store.dispatch('LoadCommentLists')
  },

}
</script>

<style>
  .container-commentlist {
    background-color: transparent;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    margin-top: 3rem;
    border-radius: 10px;
  }


  .second {
    width: 350px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 10px 10px 5px #aaaaaa;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .maincommentlist-partcontent {
    display: flex;
    justify-content: space-between;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-top: 0.5rem
  }


  .text1 {
    font-size: 13px;
    font-weight: 500;
    color: #56575b
  }

  .text2 {
    font-size: 13px;
    font-weight: 500;
    margin-left: 6px;
    color: #56575b
  }

  .text3 {
    font-size: 13px;
    font-weight: 500;
    margin-right: 4px;
    color: #828386
  }

  .text3o {
    color: #00a5f4
  }

  .text4 {
    font-size: 13px;
    font-weight: 500;
    color: #828386
  }

  .text4i {
    color: #00a5f4
  }

  .text4o {
    color: white
  }

  .thumbup {
    font-size: 13px;
    font-weight: 500;
    margin-right: 5px
  }

  .thumbupo {
    color: #17a2b8
  }

  .commentlistbody::-webkit-scrollbar {
    width: 10px;
  }
  .commentlistbody::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  .commentlistbody::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }

</style>