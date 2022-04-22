<template>
  <div class="navbar">
    <div>
      <el-row :gutter="0" type="flex" justify="space-between" align="middle">
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <!-- <img src="../../../assets/FDlogo.png" alt=""> -->
            <el-image style="width: 60px; height: 60px" :src="src"></el-image>
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
              <el-menu-item index="2">Fish</el-menu-item>
              <el-menu-item index="3">Acodes</el-menu-item>
              <el-menu-item index="4"
                ><a href="./about.html">About</a></el-menu-item
              >
            </el-menu>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <div class="userinfo" v-if="isLogin">
              <el-avatar
                class="avatar"
                :src="userinfo.user_pic"
              ></el-avatar>
              <div class="userInfo-tab">
                <div class="nikename">{{userinfo.nickname}}</div>
                <div class="hyperlinks">
                  <div class="hyperlinks-box" v-for="(item, index) in hrefs">
                    <div class="hyperlinks-item">
                      <div class="icon-left">
                        <i class="icon-left-i" :class="item.icon"></i>
                        <a class="hyperlink" :href="item.href">{{item.text}}</a>
                      </div>
                      <i class="el-icon-arrow-right icon-right"></i>
                    </div>
                  </div>
                </div>
                <div class="logout" @click="logout">退出登录</div>
              </div>             
            </div>
            <div class="login" v-else>
              <a href="./login.html">登录</a> /
              <a href="./register.html">注册</a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getUserinfo } from "api/userinfo.js";
export default {
  props: {
    navBarWidth: {
      type: Number,
      default: 950,
    },
  },
  data() {
    return {
      userinfo: {},
      src: 'http://192.168.65.1:8080/uploads/images/Logo-FD.png',
      activeIndex: "1",
      isCollapse: true,
      isLogin: false,
      token: '',
      hrefs: [
        {href: 'personalCenter.html', text: '个人中心', icon: 'el-icon-s-custom'},
        {href: './personal-center', text: '稿件管理', icon: 'el-icon-s-cooperation'},
        {href: './personal-center', text: '个人中心', icon: 'el-icon-s-custom'},
        {href: './personal-center', text: '个人中心', icon: 'el-icon-s-custom'},
        {href: './personal-center', text: '个人中心', icon: 'el-icon-s-custom'},
        {href: './personal-center', text: '个人中心', icon: 'el-icon-s-custom'},
      ]
    };
  },
  created() {
    
    this.token = localStorage.getItem('token')
    // console.log(this.token);
    if(this.token != null) {
      this.isLogin = true
      getUserinfo('/my/userinfo')
      .then(res => {
        this.userinfo = res.data
      })
      console.log('登录成功');
    }else {
      this.$message.error('请您先登录！')
    }
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
    logout() {
      localStorage.removeItem('token');
      window.location.replace('/login.html')
    }
  },
};
</script>

<style scoped>
@-webkit-keyframes fadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
}
@keyframes fadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
}

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

.avatar {
  display: block;
  transition: 0.3s all;
  border: 1px solid rgb(224, 224, 224);
}
.userinfo:hover .avatar{
  position: relative;
  z-index: 100;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  transform: scale(2) translate(-10%, 20%);
  transition: 0.3s all;
}

.userInfo-tab {
  background-color: #fff;
  position: absolute;
  display: none;
  opacity: 0;
  /* display: flex;
  flex-direction: column;
  justify-content:  space-evenly;
  align-items: center; */
  width: 220px;
  height: 450px;
  right: 30px;
  border-radius: 5px;
  transition: 0.3s all;
  
}

.userinfo:hover .userInfo-tab{
  display: flex;
  flex-direction: column;
  justify-content:  space-evenly;
  align-items: center;
  opacity: 1;
  transition: 0.3s all;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

.logout {
  cursor: pointer;
  /* position: absolute; */
  width: 90%;
  bottom: 20px;
  text-align: center;
  /* margin: 0 auto; */
}

.hyperlinks {
  width: 90%;
  height: 300px;
  display: flex;
  /* margin: 30px 0 0 0; */
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid black;
}

.hyperlinks-box {
  width: 90%;
  height: 40px;
  padding: 10px 5px;
}

.hyperlinks-item {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  padding: 0 5px 0 5px;
  transition: 0.3s all;
}

.hyperlinks-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transition: 0.3s all;
}

.hyperlinks-item a {
  display: inline-block;
  margin-left: 7px;
  text-decoration: none;
  color: black;
}

.nikename {
  margin-top: 20px;
}
</style>