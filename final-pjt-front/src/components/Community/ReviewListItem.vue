<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
    <main>
      <ol class="gradient-list">
        <li class="table-row" @click.prevent="LoadReviewDetail(reviewList)" >
          <div class="col col-1" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;" data-label="NO">{{ reviewList.id}}</div>
          <div class="col col-2" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;" data-label="작성자">{{ reviewList.user.username}}</div>
          <div class="col col-3" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;" data-label="제목">{{ reviewList.title}}</div>
          <div class="col col-4" style="font-family: 'Jua', sans-serif; font-size: 1.5rem;" data-label="영화제목">{{ reviewList.movie}}</div>
        </li>   
      </ol>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ReviewListItem',
  props: {
    reviewList: Object,
  },
  methods: {
    ...mapActions([
      'LoadReviewDetail',
    ])
  }
}
</script>

<style>
  
  .container-review {
    width:2500px;
    /* max-width: 1000px; */
    margin-left: 50px;
    margin-right: 50px;
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

  .gradient-list li {
    height:10px;
    border-radius: 3px;

    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .gradient-list .table-header {
    background-color: #95A5A6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .gradient-list .table-row {
    background-color: #B4A5A5;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  }

  .gradient-list .table-row:hover {
    background-color: pink;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  }

  .gradient-list .col {
    font-family: 'Nanum Gothic', sans-serif;
    font-family: 'Single Day', cursive;
    font-size: 20px;
  }
  .gradient-list .col-1 {
    flex-basis: 10%;
  }
  .gradient-list .col-2 {
    flex-basis: 20%;
  }
  .gradient-list .col-3 {
    flex-basis: 45%;
  }
  .gradient-list .col-4 {
    flex-basis: 25%;
  }
  @media all and (max-width: 767px) {
    .gradient-list .table-header {
      display: none;
    }
    .gradient-list li {
      display: block;
    }
    .gradient-list .col {
      flex-basis: 100%;
    }
    .gradient-list .col {
      display: flex;
      padding: 10px 0;
    }
    .gradient-list .col:before {
      color: #6C7A89;
      padding-right: 10px;
      content: attr(data-label);
      flex-basis: 50%;
      text-align: right;
    }

  }

  /*** FONTS ***/
@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);
/*** VARIABLES ***/
/* Colors */
/*** EXTEND ***/
/* box-shadow */
ol.gradient-list > li::before, ol.gradient-list > li {
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
}

/*** STYLE ***/
*,
*:before,
*:after {
  box-sizing: border-box;
}

/* html,
body {
  margin: 0;
  padding: 0;
} */

ol.gradient-list {
  counter-reset: gradient-counter;
  list-style: none;
  margin: 1.75rem 0;
  padding-left: 1rem;
}
ol.gradient-list > li {
  background: linear-gradient(135deg, #825cad 0%, #db7a62 100%);
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  counter-increment: gradient-counter;
  margin-top: 1rem;
  min-height: 3rem;
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
}
ol.gradient-list > li::before, ol.gradient-list > li::after {
  background: linear-gradient(135deg, #825cad 0%, #db7a62 100%);
  border-radius: 1rem 1rem 0 1rem;
  content: "";
  height: 3rem;
  left: -1rem;
  overflow: hidden;
  position: absolute;
  top: -1rem;
  width: 3rem;

}

/* ol.gradient-list > li::before {
  align-items: flex-end;
  content: counter(gradient-counter);
  color: #1d1f20;
  display: flex;
  font: 900 1.5em/1 "Montserrat";
  justify-content: flex-end;
  padding: 0.125em 0.25em;
  z-index: 1;
} */
ol.gradient-list > li:nth-child(10n+1):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.2) 0%, rgba(253, 220, 50, 0.2) 100%);
}
ol.gradient-list > li:nth-child(10n+2):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.4) 0%, rgba(253, 220, 50, 0.4) 100%);
}
ol.gradient-list > li:nth-child(10n+3):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.6) 0%, rgba(253, 220, 50, 0.6) 100%);
}
ol.gradient-list > li:nth-child(10n+4):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.8) 0%, rgba(253, 220, 50, 0.8) 100%);
}
ol.gradient-list > li:nth-child(10n+5):before {
  background: linear-gradient(135deg, #a2ed56 0%, #fddc32 100%);
}
ol.gradient-list > li:nth-child(10n+6):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.8) 0%, rgba(253, 220, 50, 0.8) 100%);
}
ol.gradient-list > li:nth-child(10n+7):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.6) 0%, rgba(253, 220, 50, 0.6) 100%);
}
ol.gradient-list > li:nth-child(10n+8):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.4) 0%, rgba(253, 220, 50, 0.4) 100%);
}
ol.gradient-list > li:nth-child(10n+9):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0.2) 0%, rgba(253, 220, 50, 0.2) 100%);
}
ol.gradient-list > li:nth-child(10n+10):before {
  background: linear-gradient(135deg, rgba(162, 237, 86, 0) 0%, rgba(253, 220, 50, 0) 100%);
}
ol.gradient-list > li + li {
  margin-top: 2rem;
}
</style>