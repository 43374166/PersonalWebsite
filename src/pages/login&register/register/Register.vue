<template>
  <div class="login" id="login">
    <div class="login-bgc">
      <div class="login-box">
        <div class="login-title">
          注册账号
        </div>
        <div class="login-value">
          <el-input 
            placeholder="请输入用户名！"
            type="text"
            clearable
            @blur="tipsUser"
            prefix-icon="el-icon-user-solid"
            minlength="8"
            maxlength="12"
            v-model="userData.username">
          </el-input>
          <el-alert
            v-if="showTips.unR"
            type="error"
            :closable="false"
            description="* 用户名由6-12长度的英文 _ - 数字组成"
            >
          </el-alert>

          <el-input 
            placeholder="请输入密码！"
            prefix-icon="el-icon-lock"
            type="password"
            clearable
            @blur="tipsPwd"
            show-password
            minlength="8"
            maxlength="12"
            v-model="userData.password">
          </el-input>
          <el-alert
            v-if="showTips.pdR"
            type="error"
            :closable="false"
            description="* 最少6位，包括至少一位大写字母，一位小写字母，一个数字，一个特殊字符"
            >
          </el-alert>

          <el-input 
            placeholder="再次请输入密码！"
            prefix-icon="el-icon-lock"
            type="password"
            clearable
            @blur="tipsRePwd"
            show-password
            minlength="8"
            maxlength="12"
            v-model="userData.rePassword">
          </el-input>
          <el-alert
            v-if="showTips.rePdR"
            type="error"
            :closable="false"
            description="* 两次密码不一致"
            >
          </el-alert>
          
          <el-input 
            placeholder="请输入邮箱！"
            prefix-icon="el-icon-lock"
            type="email"
            clearable
            @blur="tipsEmail"
            minlength="6"
            maxlength="18"
            v-model="userData.email">
          </el-input>
          <el-alert
            v-if="showTips.emR"
            type="error"
            :closable="false"
            description="* 邮箱输入不正确！"
            >
          </el-alert>

          <div class="verificationCode">
            <el-button @click="getVerificationCode" :disabled="isEnabled">{{show ? '发送验证码' : count + 's后可发送！'}}</el-button>
            {{sentEmaliMsg}}
          </div>
          <el-input 
              placeholder="请输入验证码！"
              type="text"
              oninput="value=value.replace(/\D/g,'')"
              minlength="6" 
              maxlength="6" 
              v-model="userData.verificationCode"
              prefix-icon="el-icon-chat-square"
              ></el-input>
          <el-button type="primary" @click="commitData" plain>注册</el-button>
        </div>
        <div class="go-login">
          <a href="./login.html">已有账号！去登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {sentEmaliV, register} from 'api/users.js'

export default {
  data() {
    return {
      userData: { username: '', password: '', rePassword: '', verificationCode: '', email: '' },
      showTips: {
        unR: false,
        pdR: false,
        rePdR: false,
        emR: false,
      },
      siSentEmali: {
        unR: false,
        pdR: false,
        rePdR: false,
        emR: false,
      },
      sentEmaliMsg: '',
      isEnabled: false,
      show: true,
      count: '',
      timer: null
    }
  },
  methods: {
    tipsUser() {
      let reg = /^[-_a-zA-Z0-9]{6,16}$/;
      if(this.userData.username.length > 6 && reg.test(this.userData.username)) {
        this.showTips.unR = false
        this.siSentEmali.unR = true
      }else {
        this.showTips.unR = true
      }
    },
    tipsPwd() {
      // 最少6位，包括至少一位大写字母，一位小写字母，一个数字，一个特殊字符
      let reg = /(?=.*[$@!%*#?&])[A-Za-z\d$@!%*#?&]{6,}$/;
      if(reg.test(this.userData.password)){
        this.showTips.pdR = false
        this.siSentEmali.pdR = true
      }else {
        this.showTips.pdR = true
      }
    },
    tipsRePwd() {
      if(this.userData.password !== this.userData.rePassword || this.userData.rePassword == ''){
        this.showTips.rePdR = true
      }else {
        this.showTips.rePdR = false
        this.siSentEmali.rePdR = true
      }
    },
    tipsEmail() {
      var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if(this.userData.email.length > 6 && reg.test(this.userData.email)){
        this.showTips.emR = false
        this.siSentEmali.emR = true
      }else {
        this.showTips.emR = true
      }
    },

    commitData() {
      let parmas = {
        username: this.userData.username,
        password: this.userData.password,
        email: this.userData.email,
        verificationCode: this.userData.verificationCode,
      }

      if(this.siSentEmali.unR && this.siSentEmali.pdR && this.siSentEmali.rePdR && 
         this.siSentEmali.emR && this.userData.verificationCode != ''
         ) {
        const loading = this.$loading({
          lock: true,
          text: '拼命加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.5)'
        });
        register('/api/register', parmas)
        .then(res => {
          if(res.status == 0) {
            this.$message({
              message: '注册成功！',
              type: "success"
            });
            setTimeout(() => {
              window.location.replace('./login.html')
            }, 3000)
          }
          if(res.status = 1) {
            this.$message.error(res.message);
          }
          loading.close()
        })
      }else {
        this.$alert('请输入正确的注册信息', {
          confirmButtonText: '确定',
          center: true,
          showClose: false
        })
      }

    },

    getVerificationCode() {
      
      if(this.siSentEmali.unR && this.siSentEmali.pdR && this.siSentEmali.rePdR && this.siSentEmali.emR) {
        const loading = this.$loading({
          lock: true,
          text: '拼命加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.5)'
        });
        sentEmaliV('/api/register/sentemail', this.userData)
        .then(res => {
          if(res.status == 200) {
            this.isEnabled = true;

            this.sentEmaliMsg = res.msg
            loading.close()

            const TIME_COUNT = 60;
            if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    this.show = true;
                    this.isEnabled = false
                    clearInterval(this.timer);
                    this.timer = null;
                  }
                }, 1000)
            }
            console.log(res);
          }else if (res.status == 400) {
            loading.close()
          }
        })
        .catch(err => {
          loading.close()
          console.log(err);
        })
      }else {
        this.$alert('以上内容不正确！', {
          confirmButtonText: '确定',
          center: true,
          showClose: false
        })
      }
      
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
    height: 500px;
    max-height: 500px;
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
  
  .go-login a{
    color: rgb(17, 22, 78);
    text-decoration: none;
  }

  .go-login a:hover {
    color: rgb(0, 195, 255);
  }
  .sss {
    position: absolute;
    right: 10px;
    top: 5px;
  }
  .verificationCode {
    font-size: 14px;
  }
</style>