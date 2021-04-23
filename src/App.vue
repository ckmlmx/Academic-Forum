<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from "./components/header/tabbar";
import Tabbar from "./components/header/tabbar.vue";
export default {
  components: {
    tabbar,
  },
  mounted() {
    // localStorage.setItem("isLogin", JSON.stringify(false));
    localStorage.setItem(
      "java",
      JSON.stringify({
        thread1: [
          {
            id: 1,
            title: "怎么实现JS序列化?",
            content: "请教一下大家，怎么把js对象序列化",
            date: "2021/1/15",
            author: "喝水的鱼",
            like: false,
            comment: [
              {
                name: "1",
                date: "2021/3/4",
                content: "adadadad",
                liked: 10,
                unliked: 5,
                isliked: false,
                isunliked: false,
              },
            ],
          },
          {
            id: 2,
            title: "git解决冲突",
            content: "在工作中，我们往往是多人开发的......",
            date: "2021/1/20",
            author: "小明",
            like: false,
            comment: [
              {
                name: "1",
                date: "2021/3/4",
                content: "adadadad",
                liked: 10,
                unliked: 5,
                isliked: false,
                isunliked: false,
              },
            ],
          },
          {
            id: 3,
            title: "JAVA搭建微服务器?",
            content: "微服务 - 微服务的作用 - 微服务框架......",
            date: "2021/2/1",
            author: "白云",
            like: false,
            comment: [
              {
                name: "1",
                date: "2021/3/4",
                content: "adadadad",
                liked: 10,
                unliked: 5,
                isliked: false,
                isunliked: false,
              },
            ],
          },
          {
            id: 4,
            title: "C++的输出格式?",
            content: "一.使用控制符控制输出格式......",
            date: "2021/2/4",
            author: "夜行客",
            like: false,
            comment: [
              {
                name: "1",
                date: "2021/3/4",
                content: "adadadad",
                liked: 10,
                unliked: 5,
                isliked: false,
                isunliked: false,
              },
            ],
          },
        ],
      })
    );
    localStorage.setItem(
      "userMessage",
      JSON.stringify([
        {
          userName: "ckm",
          passWord: "123456789",
        },
      ])
    );
  },
};
</script>

<style>
</style>