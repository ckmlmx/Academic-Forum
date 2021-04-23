<template>
  <div class="zhutie-body">
    <div class="message">
      <img src="../../assets/image/bg.jpg" />
      <p class="name">{{ name }}</p>
      <p class="louzhu">楼主</p>
      <p class="time">{{ date }}</p>
    </div>
    <div class="read">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    date: String,
    content: String,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style>
.zhutie-body {
  width: 70%;
  min-height: 400px;
  background-color: #f9f9f9;
  margin-left: 30px;
  overflow: hidden;
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
.read {
  width: 80%;
  min-height: 300px;
  margin: 20px auto;
}
</style>