<template>
  <div class="navbar">
    <div v-if="navBarWidth < 950" class="phone-nav-bar">
      <div class="dropdown">
        <el-dropdown trigger="click">
          <img
            src="~assets/images/loadMore.svg"
            class="dropdown-img"
            alt=""
            style="width: 30px"
          />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><a href="#">Home</a></el-dropdown-item>
            <el-dropdown-item
              ><a href="./about.html">About</a></el-dropdown-item
            >
            <el-dropdown-item><a href="#">CellMe</a></el-dropdown-item>
            <el-dropdown-item><a href="#">Help</a></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="phone-logo">
        <el-image style="width: 100px; height: 50px" :src="src"></el-image>
      </div>
      <div class="phone-login">
        <div class="avatar">
          <el-avatar
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
        </div>
      </div>
    </div>
    <div v-else>
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
              <el-menu-item index="4"
                ><a href="./about.html">About</a></el-menu-item
              >
            </el-menu>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <div class="avatar">
              <el-avatar
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></el-avatar>
            </div>
            <div class="login">
              <a href="./login.html">Login</a> /
              <a href="./register.html">Create Account</a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navBarWidth: {
      type: Number,
      default: 950,
    },
  },
  data() {
    return {
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: true,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
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
  color: rgb(255, 255, 255);
}

.login a {
  color: rgb(240, 240, 240);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
}

.login a:hover {
  color: #409eff;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.phone-nav-bar {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.el-dropdown-menu__item a {
  color: black;
  font-weight: 600;
  text-decoration: none;
}

.el-dropdown-menu__item:hover a {
  color: #409eff;
}
</style>