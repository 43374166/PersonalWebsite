<template>
  <div class="content">
    <div class="title"></div>
    <div class="link-card">
      <el-col :span="6">
        <el-card shadow="hover" header="444">
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="6" body-style="{height: 100px}">
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .content {
    width: 100%;
    height: 400px;
    background-image: url(~assets/images/bgc.png);
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
</style>