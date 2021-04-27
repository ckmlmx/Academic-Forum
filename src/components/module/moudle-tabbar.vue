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
        :author="item.author"
      ></outerTie>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="pagination"
      >
      </el-pagination>
      <write :type="this.type"></write>
    </el-tab-pane>
    <el-tab-pane label="最新帖子">
      <outerTie
        v-for="item in thread2"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :content="item.content"
        :date="item.date"
        :author="item.author"
      ></outerTie>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="pagination"
      >
      </el-pagination>
      <write :type="this.type"></write>
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
  props: {
    thread1: Array,
    thread2: Array,
    type: String,
  },
  data() {
    return {};
  },
  mounted() {},
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