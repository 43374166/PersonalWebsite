<template>
  <div class="recommend-the-authors">
    <div class="link-card">
      <el-col :span="6">
        <el-card shadow="hover" header="刘斌鲲鲲">
          鼠标悬浮时显示
          鼠标悬浮时显示
          鼠标悬浮时显示
          鼠标悬浮时显示
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" header="FishDreams">
          鼠标悬浮时显示
          鼠标悬浮时显示
          鼠标悬浮时显示
          鼠标悬浮时显示
          鼠标悬浮时显示
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="6" body-style="{height: 100px}">
        <el-card shadow="hover" header="青衫丿白酒">
          鼠标悬浮时显示
        </el-card>
      </el-col>
    </div>
    <div class="change-it" @click="changeRec">
      <img src="~assets/images/change.svg" alt="">
      <span>换一波</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeRec() {
      console.log('切换了');
    }
  }
}
</script>

<style>
  .recommend-the-authors {
    position: relative;
    width: 100%;
    height: 350px;
    background-image: url(~assets/images/bgc.png);
    border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  }

  .link-card {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    position: relative;
    top: 140px;
  }

  .change-it {
    position: absolute;
    bottom: 10px;
    right: 10%;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .change-it span:hover {
    color: rgb(0, 81, 255);
    text-decoration: underline;
  }

  .change-it img {
    width: 16px;
    height: 16px;
    margin: 0 3px 0 0;
  }
</style>