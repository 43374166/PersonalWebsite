<template>
  <div class="recommend-the-authors">
    <div class="link-card">
      <el-col :span="6">
        <el-card shadow="hover" header="刘斌鲲鲲">
          即使没有人为你鼓掌，也要优雅的谢幕，感谢自己的认真付出。
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" header="FishDreams">
          但凡能说透的东西，基本也就是释怀了，要知道，心结，是说不清楚的，甚至说不出口。
        </el-card>
      </el-col>
      <el-col :span="6" body-style="{height: 100px}">
        <el-card shadow="hover" header="青衫丿白酒"> 
          大多数时候，消耗你能量的都不是工作，而是工作中遇到的人。干活本身是不累的，平衡情绪最累
        </el-card>
      </el-col>
    </div>
    <div class="change-it" @click="changeRec">
      <img src="~assets/images/change.svg" alt="" />
      <span>换一波</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    screenWidth: {
      type: Number,
      default: 400,
    },
  },
  methods: {
    changeRec() {
      console.log("切换了");
    },
  },
};
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

.link-card-phone {
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