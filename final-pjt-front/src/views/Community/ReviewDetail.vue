<template>
  <div>
    <h1>READ {{reviewDetail.user.username}}'s REVIEW</h1>
    <body id="reviewdetailform">
      <div class="mainreviewdetailform">
        <div class="container-reviewdetail">
          <form>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Single+Day&display=swap" rel="stylesheet">
            <!-- <div class="reviewdetailcontent">
              <label for="">제목</label>
            </div> -->
            <div class="reviewdetailcontent" >
              <input type="text" v-model.trim="reviewDetail.title" disabled style="background-color: transparent; border: none;">
            </div>
            <hr>
            <br>
            <br>  
            <!-- <div class="reviewdetailcontent">
              <label for="">내용</label>
            </div> -->
            <div class="reviewdetailcontent">
              <textarea name="" id="" rows="15" v-model.trim="reviewDetail.content" disabled style="width:800px; height:300px; background-color: transparent; border: none;"></textarea>
            </div>
            <div class="reviewdetailcontent">
              <label for="" style="color:white;">영화 제목</label> 
            </div>
            <hr>
            <div class="reviewdetailcontent">
              <input type="search" v-model.trim="reviewDetail.movie" disabled style="background-color: transparent; border: none;"> 
            </div>
            <div class="reviewdetailcontent">
              <button disabled>평점 : {{ reviewDetail.rank }}점 체크하셨습니다.</button>
            </div>
                       
          </form>
        </div>
      </div>
      <div class="maincommentform">
        <div class="commentform-content" >
          <comment-form></comment-form>
        </div>
        <div class="commentlist-content">
          <comment-list></comment-list>
        </div>
      </div>    
    </body>
  </div>
</template>

<script>
import { mapState} from 'vuex'
import CommentForm from '@/components/Community/CommentForm.vue'
import CommentList from '@/components/Community/CommentList.vue'

export default {
  name: 'ReviewDetail',
  components: {
    CommentForm,
    CommentList
  },
  computed: {
    ...mapState([
      'reviewDetail'
    ])
  },
  // updated: {
  //   ...mapActions([
  //     'LoadReviewDetail',
  //     'LoadCommentLists'
  //   ])
  // }
  
}
</script>

<style>
  #reviewdetailform {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-width: 100vw;
    min-height: 100vh; */
  }

  .mainreviewdetailform {
    margin: 30px auto;
    margin-right: 50px;
    width: 900px;
    height: 600px;
    /* background: rgb(95, 236, 213); */
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
  }

  .maincommentform {
    margin: 20px auto;
    margin-left: 50px;
    width: 450px;
    height: 600px;
    /* background: rgb(95, 236, 213); */
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .commentform-content {
    position: absolute;
    top: 10%;
    /* right: 100px; */
    margin: 10px;
  }

  .commentlist-content {
    position: absolute;
    top: 350px;
    /* right: 120px; */
    margin: 10px;
    display: flex;
    justify-content: left;
    width: 200px;

  }


  .container-reviewdetail  {
    width: 80%;
    height: 15px;
    /* background: #e0dede; */
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  .container-reviewdetail label {
    font-family: 'Nanum Gothic', sans-serif;
    font-family: 'Single Day', cursive;
    font-size: 1.5rem;
  }

  .container-reviewdetail input {
    width: 100%;
    height: 40px;
    font-size: 1.5rem;
    border-radius: 10px;
  }

  .container-reviewdetail input:disabled{
    background-color: none;
    color: white;
  }

  .container-reviewdetail textarea {
    width: 500px;
    font-size: 1.5rem;
    border-radius: 10px;
  }

  .container-reviewdetail textarea:disabled{
    background-color: none;
    color: white;
  }

  .container-reviewdetail button{
    width: 80%;
    height: 40px;
    margin: 30px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #573b8a;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
  }

  .reviewdetailcontent {
    margin: 5px auto;
    width: 800px;
  }

</style>