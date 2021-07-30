<template>
  <div class="navbar">
    <el-row :gutter="0" type="flex" justify="space-between" align="middle">
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-image style="width: 100px; height: 50px" :src="src"></el-image>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rgb(26, 26, 26)"
            text-color="#fff"
            active-text-color="#fff"
          >
            <el-menu-item index="1">Home</el-menu-item>
            <el-submenu index="2">
              <template slot="title">Detail</template>
              <el-menu-item index="2-1">Unity</el-menu-item>
              <el-menu-item index="2-2">UE4</el-menu-item>
              <el-menu-item index="2-3">C#</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">摄影作品</template>
                <el-menu-item index="2-4-1">清新</el-menu-item>
                <el-menu-item index="2-4-2">max</el-menu-item>
                <el-menu-item index="2-4-3">项目</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3">Acodes</el-menu-item>
            <el-menu-item index="4"><a href="./about.html" target="_blank">About</a></el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <div class="avatar">
            <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
          </div>
          <div class="login">
            <a href="./login.html">Sign in</a> / 
            <a href="./retherge.html">Create Accout</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
  .navbar {
    width: 100%;
    height: 70px;
    background-color: rgb(26, 26, 26);
    position: fixed;
    z-index: 1000;

    /* border-bottom: 1px solid #fff; */
  }

  .el-col {
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .grid-content {
    /* background-color: #fff; */
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .login {
    color: #fff;
  }

  .login a {
    color: #fff;
  }
</style>