<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
    <el-tab-pane label="热门帖子" name="first">
      <outerTie
        v-for="item in thread"
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
        v-for="item in thread"
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
import store from "../../../store";
export default {
  components: {
    outerTie,
  },
  data() {
    return {
      activeName: "first",
      thread2: [],
    };
  },
  computed: {
    thread() {
      return JSON.parse(localStorage.getItem("thread"));
    },
  },
  created() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
</style>