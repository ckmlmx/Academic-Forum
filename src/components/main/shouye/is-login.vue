<template>
  <div class="isLogin-container">
    <div class="isLogin-container-img">
      <img src="../../../assets/image/time.jpg" />
    </div>
    <div class="isLogin-message">
      <el-button>我的主页</el-button>
      <el-button>我的帖子</el-button>
    </div>
    <div class="isLogin-message">
      <el-button>我的收藏</el-button>
      <el-button>我关注的</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "is-login",
};
</script>

<style scoped>
.isLogin-container {
  width: 27%;
  min-height: 400px;
  border: 1px solid rgb(184, 178, 178);
}
.isLogin-container-img {
  position: relative;
  width: 45%;
  height: 0;
  margin: 10% auto;
  padding-top: 45%;
}
.isLogin-container-img img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
}
.isLogin-message {
  margin-top: 10%;
  display: flex;
  justify-content: space-around;
}
</style>