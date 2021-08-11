<template>
  <div class="login" id="login">
    <div class="login-bgc">
      <div class="login-box">
        <div class="login-title">
          Login
        </div>
        <div class="login-value">
          <el-input 
            placeholder="请输入用户名！"
            type="text"
            clearable="true"
            prefix-icon="el-icon-user-solid"
            minlength="8"
            maxlength="12"
            v-model="userData.username">
          </el-input>
          <el-input 
            placeholder="请输入密码！"
            prefix-icon="el-icon-lock"
            type="password"
            clearable="true"
            show-password
            minlength="8"
            maxlength="12"
            v-model="userData.password">
          </el-input>
          <div class="verificationCode">
            <el-button>获取验证码</el-button>
            验证码
          </div>
          <el-input 
              placeholder="请输入验证码！"
              type="text" 
              minlength="4" 
              maxlength="4" 
              v-model="userData.verificationCode"
              prefix-icon="el-icon-chat-square"
              ></el-input>
          <el-button type="primary" plain>登录</el-button>
        </div>
        <div class="go-create-account">
          <a href="#">Forget Password</a> / 
          <a href="./register.html">Create Account</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: { username: '', password: '', verificationCode: '' }
    }
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
    height: 200px;
    display: flex;
    flex-direction: column;
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
</style>