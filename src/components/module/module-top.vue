<template>
  <div class="top">
    <div class="top-container">
      <p class="zhiding">置顶：</p>
      <p>查看论坛守则</p>
    </div>
    <div class="top-container">
      <p class="zhiding">置顶：</p>
      <p>精品帖子</p>
    </div>
    <div class="top-container">
      <p class="zhiding">置顶：</p>
      <p>最新消息</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "module-top",
  data() {
    return {
      title1: "",
      title2: "",
      title3: "",
    };
  },
  created() {
    // this.axios.get("/0").then((res) => {
    //   this.title1 = res.data.title1;
    //   this.title2 = res.data.title2;
    //   this.title3 = res.data.title3;
    // });
  },
};
</script>

<style scoped>
.top {
  overflow: hidden;
  width: 100%;
  min-height: 50px;
  background-color: white;
}
.top-container {
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  left: 70px;
  width: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.zhiding {
  color: rgb(2, 173, 224);
  font-size: 20px;
}
</style>