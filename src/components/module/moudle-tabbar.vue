<template>
  <el-tabs type="border-card" class="module-tabbar">
    <el-tab-pane label="热门帖子">
      <outerTie
        v-for="item in thread1"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :content="item.content"
        :date="item.date"
      ></outerTie>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="pagination"
      >
      </el-pagination>
      <write></write>
    </el-tab-pane>
    <el-tab-pane label="最新帖子">
      <outerTie></outerTie>
      <outerTie></outerTie>
      <outerTie></outerTie>
      <outerTie></outerTie>
      <outerTie></outerTie>

      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="pagination"
      >
      </el-pagination>
      <write></write>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import outerTie from "../tiezi/outerTie";
import write from "./module-write";
export default {
  name: "moudleTabbar",
  components: {
    outerTie,
    write,
  },
  data() {
    return {
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
};
</script>

<style>
.module-tabbar {
  min-height: 100px;
}
.pagination {
  margin-top: 20px;
  margin-left: 20px;
}
</style>