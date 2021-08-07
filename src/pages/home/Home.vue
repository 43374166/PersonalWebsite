<template>
  <div id="home" ref="home">
    <header>
      <nav-bar />
    </header>
    <main>
      <swiper></swiper>
      <rec-the-authors></rec-the-authors>
      <recommended-works></recommended-works>
    </main>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import NavBar  from 'components/common/navbar/NavBar.vue'
import Swiper from './childcomps/Swiper.vue'
import RecTheAuthors from './childcomps/RecTheAuthors.vue'
import RecommendedWorks from './childcomps/RecommendedWorks.vue'

export default {
  components: {
    NavBar,
    Swiper,
    RecTheAuthors,
    RecommendedWorks
  },
  data() {
    return {

    }
  }
}
</script>

<style>
  @import url(~assets/css/base.css);
  main {
    position: relative;
    /* top: 70px; */
  }
</style>