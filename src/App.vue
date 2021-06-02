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
    localStorage.setItem(
      "thread",
      JSON.stringify([
        {
          id: 0,
          class: "java",
          title: "怎么实现JS序列化?",
          content: "请教一下大家，怎么把js对象序列化",
          date: "2021/1/15",
          author: "喝水的鱼",
        },
        {
          id: 1,
          class: "java",
          title: "git解决冲突",
          content: "在工作中，我们往往是多人开发的......",
          date: "2021/1/20",
          author: "小明",
        },
        {
          id: 2,
          class: "java",
          title: "JAVA搭建微服务器?",
          content: "微服务 - 微服务的作用 - 微服务框架......",
          date: "2021/2/1",
          author: "白云",
        },
        {
          id: 3,
          class: "python",
          title: "C++的输出格式?",
          content: "一.使用控制符控制输出格式......",
          date: "2021/2/4",
          author: "夜行客",
        },
      ])
    );
    localStorage.setItem(
      "comment",
      JSON.stringify([
        [
          {
            name: "1",
            date: "2021/3/4",
            content: "可以使用json的stringify",
            liked: 10,
            unliked: 5,
          },
          // {
          //   name: "1",
          //   date: "2021/3/4",
          //   content: "adadadad",
          //   liked: 10,
          //   unliked: 5,
          // },
          // {
          //   name: "1",
          //   date: "2021/3/4",
          //   content: "adadadad",
          //   liked: 10,
          //   unliked: 5,
          // },
          // {
          //   name: "1",
          //   date: "2021/3/4",
          //   content: "adadadad",
          //   liked: 10,
          //   unliked: 5,
          // },
        ],
        [
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
        ],
        [
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
        ],
        [
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
        ],
        [
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
          {
            name: "1",
            date: "2021/3/4",
            content: "adadadad",
            liked: 10,
            unliked: 5,
          },
        ],
      ])
    );
    localStorage.setItem(
      "userMessage",
      JSON.stringify([
        {
          userID: 0,
          phone: 18476517636,
          userName: "ckm",
          passWord: "123456789",
          message: {
            sex: "男",
            detail: "asdadadad",
            adress: "中国",
            hobby: "ad",
          },
          likeThread: [1, 2],
          replyThread: [],
          editThread: [],
          likeComment: [
            [0, 1, 2],
            [1, 2],
          ],
          unlikeComment: [[3], [0, 3]],
          userMessage: [],
        },
      ])
    );
    localStorage.setItem("user", 0);
  },
};
</script>

<style>
</style>