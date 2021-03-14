<template>
  <el-tabs type="border-card" class="tabbar">
    <el-tab-pane label="热门回复">
      <reply></reply>
      <reply></reply>
      <reply></reply>
      <reply></reply>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="pagination"
      >
      </el-pagination>
    </el-tab-pane>
    <el-tab-pane label="最新回复">
      <reply></reply>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="pagination"
      >
      </el-pagination>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import reply from "./reply";
export default {
  components: {
    reply,
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

<style scoped>
.tabbar {
  width: 70%;
  min-height: 400px;
  background-color: #f9f9f9;
  margin-left: 30px;
  margin-bottom: 30px;
  overflow: hidden;
  margin-top: 30px;
  border: 1px dotted black;
}
.reply-tabbar {
  background-color: #f9f9f9;
  min-height: 400px;
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
.pagination {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>