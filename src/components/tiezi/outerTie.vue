<template>
  <div class="container" @click="toTiezi">
    <div class="floor">{{ id }}</div>
    <div class="article">
      <p class="titile">{{ title }}</p>
      <div class="content">{{ content }}</div>
    </div>
    <div class="author">
      <i class="el-icon-user-solid">{{ author }}</i>
      <i class="el-icon-date">发帖时间:{{ date }}</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "outerTie",
  props: {
    id: Number,
    title: String,
    author: String,
    content: String,
    date: String,
  },
  methods: {
    toTiezi() {
      this.$router.push({ path: "tiezi", query: { id: this.id } });
    },
  },
};
</script>

<style scoped>
.container {
  width: 700px;
  min-height: 80px;
  border: 0.5px dotted rgb(202, 196, 196);
  overflow: hidden;
  border-collapse: collapse;
}
.container:hover {
  background-color: rgb(229, 236, 236);
}
.floor {
  width: 40px;
  height: 20px;
  text-align: center;
  border: 0.5px solid rgb(68, 66, 66);
  border-radius: 5px;
  box-shadow: dimgray 0 0 5px;
  margin: 10px 20px 10px 20px;
  float: left;
}
.article {
  float: left;
  width: 420px;
  height: 80px;
}
.titile {
  margin: 10px 0 10px;
  color: rgb(153, 0, 255);
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
.content {
  width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: gray;
}
.author {
  width: 175px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 10px;
}
.el-icon-user-solid {
  color: red;
  display: block;
}
.el-icon-date {
  color: rgb(0, 255, 21);
  display: block;
}
</style>