<template>
  <div class="phone-show">
    <div class="phone-box">
      <h3 class="top">正在使用手机端...</h3>
      <span>当前不支持手机端浏览，请下载app！</span> 
      <el-button class="downloadBtn" @click="downloadApp" type="primary">Download</el-button>
      <div class="copyright">CopyRight@</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    downloadApp() {

    }
  }
}
</script>

<style lang="less" scoped>
  .phone-show {
    width: 100%;
    height: 100vh;
    background-image: url(~assets/images/bgc.png);
    .phone-box {
      width: 100%;
      height: 100vh;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(~assets/images/bgc.png);
      span {
        margin: 10px 0;
      }
      .downloadBtn {
        margin: 10px 0;
      }
      .copyright {
        position: relative;
        top: 180px;
      }
      .top {
        position: relative;
        bottom: 200px;
      }
    }
  }
</style>