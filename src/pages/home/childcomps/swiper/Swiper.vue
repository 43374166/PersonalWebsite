<template>
  <div class="swiper">
    <el-carousel 
      height="85vh"
      indicator-position="outside"
    >
      <el-carousel-item v-for="item in images" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
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
    margin: 0 auto;
  }

  .el-carousel__item h3 {
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  img {
    width: 100%;
  }
</style>