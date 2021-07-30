<template>
  <div class="swiper">
    <div class="swiper-item">
      <el-carousel 
        height="70vh"
        trigger="click"
      >
        <button class="load-more">Load More</button>
        <el-carousel-item v-for="item in images" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  data() {
    return {
      images: [
        'https://cdn.pixabay.com/photo/2021/07/24/01/53/macaw-6488472_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/07/22/13/41/cat-6485361_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/07/11/10/39/fantasy-6403406_960_720.jpg',
        'https://cdn.pixabay.com/photo/2020/11/17/07/25/flower-5751611_960_720.jpg'
      ],
    }
  }
}
</script>

<style>
  .swiper {
    width: 100%;
    height: 80vh;
    background-image: url(https://cdn.pixabay.com/photo/2021/07/27/16/23/buildings-6497337__340.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    
  }

  .swiper-item {
    width: 80%;
    position: relative;
    margin: 0 auto;
    top: 20vh;

    /* box-shadow: 20px 20px 15px rgba(0, 0, 0, .3); */
    box-shadow: 5px 5px 12px 0 rgba(0, 0, 0, 0.3)
  }

  /* .swiper-border {
    width: 100%;
    height: 100%;
    border: 2px solid rgb(129, 129, 129);
    position: absolute;
    z-index: 10;
    left: 10px;
    top: -10px;
  } */

  img {
    width: 100%;
  }
</style>