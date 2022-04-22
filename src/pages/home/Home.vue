<template>
  <div id="home" ref="home">
    <dv-loading 
      v-if="fullscreenLoading"
      class="dv-loading"
    >Loading...</dv-loading>
    <header>
      <nav-bar ref="navbar" :nav-bar-width="navBarWidth" />
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
      screenWidth: 0,
      token: '',
      isLogon: false,
      fullscreenLoading: true,
    }
  },
  created() {

  },
  mounted() {
    setTimeout(() => {
      this.fullscreenLoading = false
    }, 2000)
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

<style scoped lang="less">
  @import url(~assets/css/base.css);
  main {
    position: relative;
    /* top: 70px; */
  }

  .dv-loading {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100vh;
    color: white;
  }
</style>