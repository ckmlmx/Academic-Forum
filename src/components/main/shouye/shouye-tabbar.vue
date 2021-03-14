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
      thread1: [],
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