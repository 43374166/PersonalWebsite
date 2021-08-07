<template>
  <div class="recommended-works">
    <div class="works">
      <div class="card-box" v-for="item in urlList" :key="item">
        <div class="card">
          <el-image
            :src="item"
            :preview-src-list="srcList"
            fit="fill"
          >
          </el-image>
          <span class="authorName">阿坤hh</span>
          <div class="desc">
            <span class="desc-text">这些大概都是我拍摄的风景照片，希望技术越来越高，哈哈哈。</span>
            <span class="load-more">更多</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      urlList: ['https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                'https://cdn.pixabay.com/photo/2021/03/12/05/14/cyberpunk-6088729_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/03/10/10/58/bamboo-flute-6084294_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/03/10/10/55/branches-6084284_960_720.jpg',
                'https://cdn.pixabay.com/photo/2021/03/10/10/53/sunset-6084279_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/10/05/13/53/autumn-5629486_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/11/17/07/25/flower-5751611_960_720.jpg',
                'https://cdn.pixabay.com/photo/2020/09/13/10/46/camera-5567919_960_720.jpg'
                ],
      srcList: [
          'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        ]
    };
  },
};
</script>

<style>
.recommended-works {
  width: 100%;
  margin: 20px 0 0 0;
  box-shadow: 0 1px 5px 0 rgb(100, 100, 100, 0.3);
}

.works {
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card-box {
  padding: 0 0 20px 0;
}

.card {
  width: 270px;
  /* height: 350px; */
  border-radius: 6px;
  margin: 0 10px;
  box-shadow: 0 0 2px 0 rgba(50, 50, 50, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.5);
}

.card img {
  width: 99%;
  height: 280px;
  margin: 0 auto;
  display: block;
  border-radius: 6px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  cursor: zoom-in;
}

.authorName {
  display: inline-block;
  position: relative;
  left: 10px;
  padding: 15px 0;
  color: rgb(3, 1, 80);
  font-weight: 500;
}

.desc {
  width: 96%;
  position: relative;
  left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.desc-text {
  width: 85%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 14px;
    
}

.load-more {
  text-align: center;
  cursor: pointer;
}

.load-more:hover {
  color: rgb(0, 150, 255);
  text-decoration: underline;
}
</style>