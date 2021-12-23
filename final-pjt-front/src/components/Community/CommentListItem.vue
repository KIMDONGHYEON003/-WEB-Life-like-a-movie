<template>
  <div class="maincommentlistitem">
    <div class="second"> 
      <div class="maincommentlist-listcontent">
        <div>
          <span span class="text1">{{ commentList.content }}</span>
        </div>
        <div>
          <button type="button" class="btn-close" @click.prevent="DeleteComment(commentList.id)" v-show="commentList.user.username === $store.state.userName">
            <span class="icon-cross"></span>
            <span class="visually-hidden">Close</span>
          </button>
        </div>
      </div>
      <div class="maincommentlist-partcontent">
        <div><img src="" width="10"><span class="text2">{{ commentList.user.username }}</span></div>
        <div><span class="text3">{{isLoggedIn}}</span><span class="thumbup"><i class="fa fa-thumbs-o-up"></i></span><span class="text4">0</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'


export default {
  name: 'CommentListItem',
  props: {
    commentList: Object,
  },
  methods: {
    ...mapActions([
      'DeleteComment'
    ]),
  },
  computed: {
  }
}
</script>

<style>
  .maincommentlistitem {
    margin: 20px;
  }

  .maincommentlist-listcontent {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;
  }

  .btn-close {
    margin: 0;
    border: 0;
    padding: 0;
    background: #0066ff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 150ms;
  }
  .btn-close .icon-cross {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    position: relative;
    width: 15px;
    height: 15px;
  }
  .btn-close .icon-cross:before, .btn-close .icon-cross:after {
    content: "";
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
    height: 5px;
    background: #fff;
    border-radius: 6px;
  }
  .btn-close .icon-cross:before {
    transform: rotate(45deg);
  }
  .btn-close .icon-cross:after {
    transform: rotate(-45deg);
  }
  .btn-close .icon-cross span {
    display: block;
  }
  .btn-close:hover, .btn-close:focus {
    transform: rotateZ(90deg);
    background: #0052cc;
  }

  .visually-hidden {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }
</style>