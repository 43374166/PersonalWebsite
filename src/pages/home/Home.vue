<template>
  <div id="home" ref="home">
    <header>
      <nav-bar />
    </header>
    <main>
      <swiper></swiper>
      <main-content></main-content>
    </main>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import NavBar  from 'components/common/navbar/NavBar.vue'
import Swiper from './childcomps/swiper/Swiper.vue'
import MainContent from './childcomps/content/MianContent.vue'

export default {
  components: {
    NavBar,
    Swiper,
    MainContent
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