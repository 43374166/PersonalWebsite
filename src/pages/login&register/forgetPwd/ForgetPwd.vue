<template>
  <div class="login" id="login">
    <div class="login-bgc">
      <div class="login-box">
        <div class="login-title">找回密码</div>
        <div class="login-value">
          <el-input
            placeholder="请输入你的邮箱"
            type="email"
            clearable
            prefix-icon="el-icon-user-solid"
            minlength="8"
            maxlength="20"
            class="loginInput"
            v-model="userData.changePwdEmail"
          >
          </el-input>
          <el-alert
            v-if="isEmail"
            type="error"
            :closable="false"
            description="* 邮箱格式有误！"
          >
          </el-alert>

          <el-input
            placeholder="请输入新密码！"
            prefix-icon="el-icon-lock"
            type="password"
            clearable
            show-password
            minlength="8"
            maxlength="12"
            class="loginInput"
            v-model="userData.password"
          >
          </el-input>
          <el-input
            placeholder="请确认新密码！"
            prefix-icon="el-icon-lock"
            type="password"
            clearable
            show-password
            minlength="8"
            maxlength="12"
            class="loginInput"
            v-model="userData.rePassword"
          >
          </el-input>
          <div class="verificationCode">
            <el-button @click="getVerificationCode">获取验证码</el-button>
            验证码
          </div>
          <el-input
            placeholder="请输入验证码！"
            type="text"
            oninput="value=value.replace(/\D/g,'')"
            minlength="6"
            maxlength="6"
            class="loginInput"
            v-model="userData.verificationCode"
            prefix-icon="el-icon-chat-square"
          ></el-input>
          <el-button type="primary" @click="commitData" plain>确认</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { forgetPwdGetCode, changePwd } from "api/users";
import { throttle } from "lodash";

export default {
  data() {
    return {
      isEmail: false,
      userData: {
        changePwdEmail: "",
        password: "",
        rePassword: "",
        verificationCode: "",
      },
    };
  },
  methods: {
    commitData() {
      const params = {
        changePwdEmail: this.userData.changePwdEmail,
        password: this.userData.password,
        verificationCode: this.userData.verificationCode,
      };

      var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.userData.changePwdEmail == "") {
        this.$message.error("邮箱不能为空");
        return;
      } else if (!reg.test(this.userData.changePwdEmail)) {
        this.$message.error("邮箱格式有误！");
        return;
      }
      if (this.userData.password == "") {
        this.$message.error("密码不能为空");
        return;
      }
      if (this.userData.rePassword == "") {
        this.$message.error("确认密码密码不能为空");
        return;
      }
      if (this.userData.rePassword !== this.userData.password) {
        this.$message.error("密码不一致！");
        return;
      }
      if (this.userData.verificationCode == "") {
        this.$message.error("验证码不能为空");
        return;
      }

      const loading = this.$loading({
        lock: true,
        text: "拼命加载中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.5)",
      });
      changePwd("/api/changepwd", params).then((res) => {
        console.log(res);
        loading.close();
        if (res.status === 0) {
          this.$message({
            type: "success",
            message: "修改密码成功！",
          });
          setTimeout(() => {
            window.location.replace("./login.html");
          }, 3000);
        } else if (res.status === 1) {
          this.$message({
            type: "error",
            message: "修改密码失败，请稍后再试！",
          });
        }
      });
    },
    getVerificationCode() {
      const params = {
        email: this.userData.changePwdEmail,
      };
      var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.userData.changePwdEmail == "") {
        this.$message.error("邮箱不能为空");
        return;
      } else if (!reg.test(this.userData.changePwdEmail)) {
        this.$message.error("邮箱格式有误！");
        return;
      }
      const loading = this.$loading({
        lock: true,
        text: "拼命加载中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.5)",
      });
      forgetPwdGetCode("/api/changepwd/sentemail", params)
        .then((res) => {
          console.log(res);
          loading.close();
          if (res.status === 0) {
            this.$message({
              type: "success",
              message: "验证码发送成功",
            });
          } else if (res.status === 1) {
            this.$message({
              type: "error",
              message: "验证码发送失败，请稍后再试！",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~assets/css/base.css");

.loginInput {
  margin-bottom: 5px;
}

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
  min-width: 600px;
  height: 500px;
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
  justify-content: center;
  align-items: center;
}

.login-value {
  width: 50%;
  /* height: 200px; */
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

.login-title {
  font-size: 20px;
  font-weight: 600;
}

.go-create-account a {
  color: rgb(17, 22, 78);
  text-decoration: none;
}

.go-create-account a:hover {
  color: rgb(0, 195, 255);
}
</style>