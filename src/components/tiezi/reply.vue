<template>
  <div class="reply">
    <div class="message">
      <img src="../../assets/image/bg.jpg" />
      <p class="name">ckm</p>
      <p class="louzhu" v-if="isLouzhu">楼主</p>
      <p class="time">2020/20/20</p>
    </div>
    <div class="content">
      深大阿达的阿打算打大四打打啊阿萨德AAS按时打大叔大婶打大四的萨达是大叔大婶打打啊大四打
    </div>
    <div class="interaction">
      <i class="iconfont icon-zan">点赞(10)</i>
      <i class="iconfont icon-zan-copy">踩(5)</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLouzhu: false,
      name: "",
      date: "",
      content: "",
      liked: 0,
      unliked: 0,
    };
  },
  created() {
    this.axios.get("/0").then((res) => {
      this.name = res.data.name;
      this.date = res.data.date;
      this.content = res.data.content;
      this.liked = res.data.liked;
      this.unliked = res.data.unliked;
    });
  },
};
</script>

<style scoped>
.reply {
  width: 97%;
  min-height: 180px;
  margin: 0px auto;
  border-top: 1px dotted rgb(117, 115, 115);
  border-bottom: 1px dotted rgb(122, 119, 119);
}
.message {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
  margin-top: 10px;
}
.message img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.message .name {
  margin-left: 10px;
  color: blueviolet;
}
.message .louzhu {
  margin-left: 10px;
  width: 45px;
  height: 25px;
  border-radius: 10px;
  background-color: rgb(175, 170, 170);
  text-align: center;
}
.message .time {
  margin-left: 10px;
  color: gray;
}
.content {
  width: 80%;
  margin-left: 70px;
  margin-top: 10px;
}
.interaction {
  width: 170px;
  height: 30px;
  margin-top: 20px;
  margin-left: 60px;
  display: flex;
  justify-content: space-around;
}
</style>