<template>
  <div id="personalCenter">
    <div class="navbar">
      <div class="back-home" @click="backHome">FishDream</div>
    </div>
    <div class="userinfo-bg">
      <div class="filter">
        <div class="filter-hidden"></div>
      </div>
      <div class="userinfo">
        <div
          @mouseleave="noShowUpdateText"
          @mouseenter="showUpdateText"
          @click="updateAvatar"
        >
          <el-avatar
            class="avatar"
            :class="{ addBefore: addBefore }"
            :size="100"
            :src="userinfo.user_pic"
          ></el-avatar>
        </div>
        <span class="nickname">{{ userinfo.nickname || "未填写" }}</span>
        <div class="nickname-tab">
          <div class="info">
            <span v-if="this.userinfo.gender == '2'">保密</span>
            <el-image v-else :src="this.userinfo.genderPath" fit="cover">
            </el-image>
            <span class="separate">·</span>
            <span class="age">{{ userinfo.ageTime || "未填写" }}</span>
          </div>
        </div>
        <div class="signature">{{ userinfo.signature }}</div>
      </div>
    </div>

    <div>
      <el-button type="primary" @click="updateInfo">修改资料</el-button>
    </div>
    <!-- 展示修改资料信息 -->
    <div v-show="isShow" class="updated-userinfo">
      <transition name="el-fade-in-linear">
        <div class="updated-userinfo-box" v-show="isShow">
          <div class="title">信息填写</div>
          <div class="update-info">
            <div class="item">
              <span>昵称：</span>
              <el-input
                class="nickname-input"
                v-model="updateUserinfo.nickname"
                placeholder="你的昵称"
                maxlength="12"
                show-word-limit
              >
              </el-input>
            </div>
            <div class="item">
              <span>性别：</span>
              <div>
                <el-radio-group size="mini" v-model="updateUserinfo.gender">
                  <el-radio-button label="0">男</el-radio-button>
                  <el-radio-button label="1">女</el-radio-button>
                  <el-radio-button label="2">保密</el-radio-button>
                </el-radio-group>
              </div>
            </div>
            <div class="item">
              <span>生日：</span>
              <el-date-picker
                v-model="updateUserinfo.birthday"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="timestamp"
              >
              </el-date-picker>
            </div>
            <div class="item">
              <span>签名：</span>
              <el-input
                class="signature-input"
                type="textarea"
                v-model="updateUserinfo.signature"
                maxlength="60"
                show-word-limit
                autosize
                resize="none"
              >
              </el-input>
            </div>
          </div>
          <div class="submut">
            <el-button type="primary" @click="submitUpdateUserinfo"
              >确认</el-button
            >
            <el-button v-show="userinfo.is_new_user == 1" @click="cancel"
              >取消</el-button
            >
          </div>
        </div>
      </transition>
    </div>

    <!-- 修改头像 -->
    <submit-info-box
      v-show="isShowAvatar"
      @isShowAva="showAva"
      :isShowAvatar="isShowAvatar"
    />
  </div>
</template>

<script>
import { getUserinfo, updateUserinfo } from "api/userinfo.js";
import SubmitInfoBox from "./childcomps/submitInfoBox.vue";

export default {
  components: {
    SubmitInfoBox,
  },

  data() {
    return {
      userinfo: {},
      updateUserinfo: {
        nickname: "",
        gender: Number,
        birthday: "",
        signature: "",
      },
      isShow: false,
      addBefore: false,
      isShowAvatar: false,
    };
  },
  created() {
    this.getUserinfo();
  },

  methods: {
    // 获取用户信息
    getUserinfo() {
      getUserinfo("/my/userinfo")
        .then((res) => {
          this.userinfo = res.data;
          console.log(this.userinfo);
          const date = new Date(res.data.age);
          const nowDate = new Date(new Date().getTime()).getFullYear();
          this.userinfo.ageTime = nowDate - date.getFullYear();

          switch (this.userinfo.gender) {
            case "0":
              this.userinfo.genderPath = require("../../assets/images/man.png");
              break;
            case "1":
              this.userinfo.genderPath = require("../../assets/images/woman.png");
              break;
            default:
              break;
          }
          if (res.data.is_new_user == 0) {
            this.$msgbox({
              title: "填写信息提示",
              message: "您好！欢迎注册本站点！请先点击确认填写完整信息！",
              confirmButtonText: "确认",
              center: true,
              showClose: false,
            }).then(() => {
              this.isShow = true;
            });
          }

          this.updateUserinfo = {
            nickname: this.userinfo.nickname,
            gender: this.userinfo.gender,
            birthday: this.userinfo.age,
            signature: this.userinfo.signature,
          };
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 向服务器发送请求
    submitUpdateUserinfo() {
      let newInfo = {
        ...this.updateUserinfo,
        nickname: this.updateUserinfo.nickname.replace(/\s*/g, ""),
      };
      console.log(this.updateUserinfo);
      let checkUpdate = {
        nickname: newInfo.nickname,
        gender: this.updateUserinfo.gender,
        birthday: this.updateUserinfo.birthday,
        signature: this.updateUserinfo.signature,
      };
      if (
        newInfo.nickname != "" &&
        newInfo.gender != "" &&
        newInfo.birthday != ""
      ) {
        if (
          checkUpdate.nickname == this.userinfo.nickname &&
          checkUpdate.gender == this.userinfo.gender &&
          checkUpdate.birthday == this.userinfo.age &&
          checkUpdate.signature == this.userinfo.signature
        ) {
          this.$message({
            message: "内容未发生修改！",
            type: "error",
          });
        } else {
          updateUserinfo("/my/userinfo", newInfo)
            .then((res) => {
              if (res.status == 0) {
                setTimeout(() => {
                  this.isShow = false;
                  history.go(0);
                }, 2000);
                this.$message({
                  message: res.message,
                  type: "success",
                });
              }

              if (res.status == 1) {
                this.$message({
                  message: res.message,
                  type: "error",
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        this.$message({
          message: "请填写完整个人信息！(昵称，性别，出生日期不能为空！)",
          type: "error",
        });
      }
    },

    backHome() {
      window.location.replace('/')
    },

    // 显示更新头像
    updateAvatar() {
      this.isShowAvatar = true;
    },

    // 显示更新用户资料
    updateInfo() {
      this.isShow = true;
    },
    // 子组件传递来的取消显示
    showAva(ava) {
      this.isShowAvatar = ava;
    },

    // 取消按钮
    cancel() {
      this.isShow = false;
    },

    // 显示修改头像文字
    showUpdateText() {
      this.addBefore = true;
    },

    // 取消显示修改文字
    noShowUpdateText() {
      this.addBefore = false;
    },
  },
};
</script>

<style scoped>
@import url(~assets/css/base.css);
.navbar {
  width: 100%;
  height: 60px;
  background-color: rgb(48, 48, 48);
  display: flex;
  justify-content: start;
  align-items: center;
}

.back-home {
  color: white;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 30px;
}

.userinfo {
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #fff;
}

.userinfo-bg {
  width: 100%;
  height: 250px;
  background-image: url(https://cdn.pixabay.com/photo/2021/07/27/16/23/buildings-6497337__340.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  color: #fff;
}

.separate {
  margin: 0 10px;
  font-weight: 600;
}

.nickname-tab {
  margin-left: 10px;
}

.info {
  /* width: 20px; */
  max-width: 400px;
  /* border: 1px solid; */
  display: flex;
  justify-content: space-between;
}

.updated-userinfo {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
}

.updated-userinfo-box {
  width: 500px;
  height: 400px;
  max-height: 100vh;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.update-info {
  width: 80%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.item {
  display: flex;
  align-items: center;
}
.nickname-input {
  width: 200px;
}

.signature-input {
  width: 350px;
}

.filter {
  overflow: hidden;
  width: 100%;
  height: 250px;
  position: absolute;
}

.filter-hidden {
  width: 100%;
  height: 250px;
  background-image: url(https://cdn.pixabay.com/photo/2021/07/27/16/23/buildings-6497337__340.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  filter: blur(10px);
  transform: scale(1);
}

.nickname {
  font-size: 20px;
  font-weight: 600;
}
.avatar {
  border: 2px solid white;
}

.addBefore::before {
  content: "修改头像";
  transition: all 1s;
}
</style>