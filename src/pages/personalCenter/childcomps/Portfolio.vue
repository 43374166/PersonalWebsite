<template>
  <div class="portfolio">
    <!-- 作品集 -->
    <div class="portfolio-items">
      <div class="item">
        <div class="demo-image__lazy">
          <!-- <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image> -->
          <img style="width: 20%" v-for="url in urls" :key="url" :src="url" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urls: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
        "https://cdn.pixabay.com/photo/2020/09/13/10/46/camera-5567919_960_720.jpg"
      ],
    };
  },
};
</script>

<style lang="less" scoped>
  .portfolio {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .portfolio-items {
      width: 96%;
      // background-color: rgb(206, 206, 206);
    }
  }
</style>