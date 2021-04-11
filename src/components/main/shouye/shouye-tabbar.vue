<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
    <el-tab-pane label="热门帖子" name="first">
      <outerTie
        v-for="item in thread1"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :content="item.content"
        :date="item.date"
        :author="item.author"
      ></outerTie>
    </el-tab-pane>
    <el-tab-pane label="最新帖子" name="second"
      ><outerTie
        v-for="item in thread2"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :content="item.content"
        :date="item.date"
        :author="item.author"
      ></outerTie
    ></el-tab-pane>
    <el-tab-pane label="关注的贴子" name="third"
      ><outerTie></outerTie
    ></el-tab-pane>
  </el-tabs>
</template>
<script>
import outerTie from "../../tiezi/outerTie";
export default {
  components: {
    outerTie,
  },
  data() {
    return {
      activeName: "first",
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
      thread2: [],
    };
  },
  created() {
    this.axios.get("/thread/forum-thread-page").then((res) => {
      this.thread1 = res.data.thread1;
      this.thread2 = res.data.thread2;
    });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
</style>