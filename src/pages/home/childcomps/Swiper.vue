<template>
  <div class="swiper">
    <div class="filter">
      <div class="filter-hidden"></div>
    </div>
    <div class="swiper-item">
      <el-carousel 
        height="70vh"
        trigger="click"
      >
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
  props: {
    screenWidth: {
      type: Number,
      default: 400
    }
  },
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
    position: relative;
    width: 100%;
    height: 80vh;
    background-image: url(https://cdn.pixabay.com/photo/2021/07/27/16/23/buildings-6497337__340.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 10;
  }

  .filter {
    overflow: hidden;
    width: 100%;
    height: 80vh;
    position: absolute;
  }

  .filter-hidden {
    width: 100%;
    height: 80vh;
    background-image: url(https://cdn.pixabay.com/photo/2021/07/27/16/23/buildings-6497337__340.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    filter: blur(10px);
    transform: scale(1);
  }

  .swiper-item {
    width: 80%;
    position: relative;
    margin: 0 auto;
    top: 20vh;

    border: 1px solid #fff;
    padding: 10px;

    /* box-shadow: 20px 20px 15px rgba(0, 0, 0, .3); */
    box-shadow: 5px 5px 12px 0 rgba(0, 0, 0, 0.3)
  }

  img {
    width: 100%;
  }

  .el-carousel__indicators {
    width: 160px;
  }

  @media screen and (max-width:400px) {
    .swiper {
      height: 40vh;
    }
  }
</style>