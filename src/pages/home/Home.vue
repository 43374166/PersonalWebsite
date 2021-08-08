<template>
  <div id="home" ref="home">
    <header>
      <nav-bar ref="navbar" :nav-bar-width="navBarWidth"/>
    </header>
    <main>
      <swiper :screen-width="screenWidth"></swiper>
      <rec-the-authors :screen-width="screenWidth"></rec-the-authors>
      <recommended-works></recommended-works>
    </main>
    <footer>
      <footer-content></footer-content>
    </footer>
    <back-top></back-top>
  </div>
</template>

<script>
import NavBar  from 'components/common/navbar/NavBar.vue'
import Swiper from './childcomps/Swiper.vue'
import RecTheAuthors from './childcomps/RecTheAuthors.vue'
import RecommendedWorks from './childcomps/RecommendedWorks.vue'
import FooterContent from './childcomps/FooterContent.vue'
import BackTop from 'components/common/BackTop.vue'

export default {
  components: {
    NavBar,
    Swiper,
    RecTheAuthors,
    RecommendedWorks,
    FooterContent,
    BackTop
  },
  data() {
    return {
      navBarWidth: 0,
      screenWidth: 0
    }
  },
  created() {
    
  },
  mounted() {
    this.getScreenWidth()
  },
  updated() {
    
  },
  methods: {
    getScreenWidth() {
      this.screenWidth = this.$refs.navbar.$el.offsetWidth
      this.navBarWidth = this.$refs.navbar.$el.offsetWidth
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