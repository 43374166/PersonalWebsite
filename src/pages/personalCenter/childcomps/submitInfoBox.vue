<template>
  <div class="updated-avatar">
    <transition name="el-fade-in-linear">
      <div class="updated-avatar-box" v-show="isShowAvatar">
        <div class="title">修改头像</div>
        <div class="update-avatar">
          <!-- <input ref="a" type="file" @change="aaa($event)" accept="image/*"> -->
          <el-upload
            ref="upload"
            class="avatar-uploader"
            action=""
            list-type="picture"
            :show-file-list="false"
            :on-change="changeUpload"
            :auto-upload="false"
            :ilmit="1"
          >
            <el-image fit="cover" v-if="imageUrl" :src="imageUrl" class="avatar"></el-image>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="submit">
          <el-button type="primary" @click="submitUpdateAvatar" :loading="loading">确认</el-button>
          <el-button @click="cancel">取消</el-button>
        </div>
      </div>
    </transition>
    <el-dialog title="图片剪裁" :visible.sync="dialogVisible" append-to-body>
      <div class="cropper-content">
        <div class="cropper" style="text-align:center">
        <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :centerBox="option.centerBox"
            :infoTrue="option.infoTrue"
            :fixedBox="option.fixedBox"
          ></vueCropper>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="finish">确认</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>
import {updateAvatar} from 'api/userinfo.js'
export default {
  props: {
    isShowAvatar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      imageUrl: "",
      fileBlob: '',
      isShowAva: false,


      dialogVisible: false,
      // 裁剪组件的基础配置option
      option: {
        img: '', // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 1, // 裁剪生成图片的质量
        outputType: 'jpeg', // 裁剪生成图片的格式
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 100, // 默认生成截图框宽度
        autoCropHeight: 100, // 默认生成截图框高度
        fixedBox: true, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [1, 1], // 截图框的宽高比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: false, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: false, // 截图框是否被限制在图片里面
        infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      picsList: [],  //页面显示的数组
      // 防止重复提交
      loading: false
    };
  },
  methods: {
    submitUpdateAvatar() {
      // 更新头像
      this.loading = true
      this.uploadHeadUrl_c(this.fileBlob)
    },

    cancel() {
      // 取消按钮
      this.$emit('isShowAva', this.isShowAva)
    },


    // 上传按钮   限制图片大小
    changeUpload(file) {
      const isJPGorPNG = file.raw.type === 'image/jpeg' || file.raw.type === 'image/png' || file.raw.type === 'image/jpg'
      const isLt5M = file.size / 1024 / 1024 < 10
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 10MB!')
        return false
      }
      if (!isJPGorPNG) {
        this.$message.error('上传头像图片只能是 JPG或者PNG 格式!')
        return false
      }
      var temp = window.URL.createObjectURL(new Blob([file.raw]));
      // this.fileinfo = file
      
      // 上传成功后将图片地址赋值给裁剪框显示图片
      this.$nextTick(() => {
        this.option.img = temp
        this.dialogVisible = true
      })
    },
    // 点击裁剪，这一步是可以拿到处理后的地址
    finish() {
      // 获取base64文件数据
      this.$refs.cropper.getCropBlob(data => {
      //  var fileName = "goods" + this.fileinfo.uid;
      //  this.loading = true;
       console.log(data);
       const myBlob = new window.Blob([data], {type: 'image/jpeg'})
       const qrUrl = window.URL.createObjectURL(myBlob)
       this.imageUrl = qrUrl
      //  console.log(qrUrl);
      this.fileBlob = data
      this.dialogVisible = false
      //  this.uploadHeadUrl_c(data);
     })
    },

    uploadHeadUrl_c(file) {
     let formData = new FormData();
    //  formData.append("moduleName", "headUrl");
     formData.append("avatar", file);

     updateAvatar('/my/userinfo/avatar',formData).then(res => {
      //  this.headUrl = "";
       console.log(res);
       if (res.status == "0") {
        //  this.headUrl = res.data;
        this.$message({
          message: res.message,
          type: 'success'
        })
        setTimeout(() => {
          this.$emit('isShowAva', this.isShowAva)
          this.loading = false;
        }, 3000);
       }
     });
   },
  },
};
</script>

<style scoped>
.updated-avatar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
}

.updated-avatar-box {
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.cropper-content .cropper{
  width: auto;
  height: 300px;
}
</style>