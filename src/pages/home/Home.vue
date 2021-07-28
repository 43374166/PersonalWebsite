<template>
  <div id="home" ref="home">
    <header>
      <nav-bar />
    </header>
    <main>
      <swiper></swiper>
      HOME,Vue
      <a href="./about.html">About</a>
    </main>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import NavBar  from 'components/common/navbar/NavBar.vue'
import Swiper from './childcomps/swiper/Swiper.vue'

export default {
  components: {
    NavBar,
    Swiper
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
    top: 80px;
  }
</style>