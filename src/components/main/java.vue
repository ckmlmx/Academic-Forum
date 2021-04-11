<template>
  <div>
    <tabbar></tabbar>
    <img src="../../assets/image/top.jpg" class="java-img" />
    <tBody class="java-body">
      <div class="java-top">
        <isImage :url="url" wid="200px" high="200px" class="isImage"></isImage>
        <div>
          <p class="java-a">这是java的世界</p>
          <a href="#write-container"><i class="el-icon-edit">我要发帖</i></a>
        </div>
      </div>
      <moduleTop></moduleTop>
      <moduleTabbar :thread1="thread1"></moduleTabbar>
    </tBody>
  </div>
</template>

<script>
import tabbar from "../header/tabbar";
import tBody from "../module/module-body";
import isImage from "../public/isImage";
import moduleTop from "../module/module-top";
import moduleTabbar from "../module/moudle-tabbar";
export default {
  name: "java",
  components: {
    tabbar,
    tBody,
    isImage,
    moduleTop,
    moduleTabbar,
  },
  data() {
    return {
      url: require("../../assets/image/time.jpg"),
      id: "",
      thread1: [
        {
          id: "1",
          title: "怎么实现JS序列化?",
          content: "请教一下大家，怎么把js对象序列化",
          date: "2021/1/15",
          author: "喝水的鱼",
        },
        {
          id: "3",
          title: "git解决冲突",
          content: "在工作中，我们往往是多人开发的......",
          date: "2021/1/20",
          author: "小明",
        },
        {
          id: "4",
          title: "JAVA搭建微服务器?",
          content: "微服务 - 微服务的作用 - 微服务框架......",
          date: "2021/2/1",
          author: "白云",
        },
        {
          id: "5",
          title: "C++的输出格式?",
          content: "一.使用控制符控制输出格式......",
          date: "2021/2/4",
          author: "夜行客",
        },
      ],
    };
  },
  methods: {
    to() {
      this.$router.push("/writeContainer");
    },
  },
};
</script>

<style scoped>
.clear {
  clear: both;
}
.java-img {
  display: block;
  width: 70%;
  margin: 3% auto;
}
.java-body {
  top: 40%;
}
.java-top {
  width: 37%;
  position: relative;
  left: 3%;
  top: -90px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: -8%;
}
.java-top p {
  font-size: 1.5em;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
}
.el-icon-edit {
  margin-top: 30px;
  color: blue;
}
.el-icon-edit:hover {
  color: rgb(94, 94, 228);
  cursor: pointer;
}
</style>