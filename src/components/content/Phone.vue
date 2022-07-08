<template>
  <div class="phone-show">
    <div class="phone-box">
      <h3 class="top">正在使用手机端...</h3>
      <span>当前不支持手机端浏览，请下载app！</span> 
      <el-button class="downloadBtn" @click="downloadApp" type="primary">Download</el-button>
      <span>当前版本{{version}}</span>
      <div class="copyright">CopyRight@</div>
    </div>
  </div>
</template>

<script>
import { getVersion } from '../../api/users'
export default {
  data() {
    return {
      version: '1.0.0',
    }
  },
  created() {
    this.getNewVersion()
  },
  methods: {
    downloadApp() {
      window.location.href = `http://159.138.57.207:8080/uploads/apk/FishDream-${this.version}.apk`
    },

    getNewVersion() {
      getVersion().then(res => {
        if(res.status === 0) {
          this.version = res.data.app_version
        }
      })
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