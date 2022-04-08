<template>
  <div class="login" id="login">
    <div class="login-bgc">
      <div class="login-box">
        <div class="change-login">
          二维码登录
        </div>
        <div class="login-title">
          登录
        </div>
        <div class="login-value">
          <el-input 
            placeholder="请输入用户名！"
            type="text"
            clearable
            prefix-icon="el-icon-user-solid"
            minlength="8"
            maxlength="12"
            v-model="userData.username">
          </el-input>
          <el-input 
            placeholder="请输入密码！"
            prefix-icon="el-icon-lock"
            type="password"
            clearable
            show-password
            minlength="8"
            maxlength="12"
            v-model="userData.password">
          </el-input>
          <el-button type="primary" @click="commitData" plain>登录</el-button>
        </div>
        <div class="go-create-account">
          <a href="./forgetPwd.html">找回密码</a> / 
          <a href="./register.html">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "api/users";

export default {
  data() {
    return {
      userData: { username: '', password: '', verificationCode: '' }
    }
  },
  methods: {
    commitData() {
      let parmas = {
        username: this.userData.username,
        password: this.userData.password
      }
      if(this.userData.username != '' && this.userData.password != '') {
        login('/api/login', parmas)
        .then(res => {
          if(res.status == 0) {
            localStorage.setItem('token', res.token)
            this.$message({
              message: res.message,
              type: 'success'
            })

            setTimeout(() => {
              window.location.replace('/')
            }, 3000)
          }
          if(res.status == 1) {
            this.$message.error(res.message)
          }
        })
      }
      
    },
    getVerificationCode() {

    },
  }
}
</script>

<style scoped>
  @import url('~assets/css/base.css');

  .login {
    width: 100%;
    height: 100vh;
  }

  .login-bgc {
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    position: relative;
  }

  .login-box {
    width: 40%;
    height: 400px;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;

    border: 1px solid #000;
    box-shadow: 15px 15px 5px 0 rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .login-value {
    width: 50%;
    /* height: 200px; */
    display: flex;
    flex-direction: column;
    
    justify-content: space-between;
  }


  .login-title {
    font-size: 20px;
    font-weight: 600;
  }
  
  .go-create-account a{
    color: rgb(17, 22, 78);
    text-decoration: none;
  }

  .go-create-account a:hover {
    color: rgb(0, 195, 255);
  }

  .change-login {
    position: absolute;
    padding: 5px;
    top: 5px;
    right: 10px;
    border: 1px solid rgba(0, 0, 0, 0.288);
    border-radius: 5px;
    /* background-color: rgb(230, 228, 228); */
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.075);
    cursor: pointer;
  }
</style>