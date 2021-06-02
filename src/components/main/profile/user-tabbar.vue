<template>
  <div class="tabbar">
    <el-tabs v-model="activeName" class="user-tab">
      <el-tab-pane name="first">
        <span slot="label"><i class="el-icon-star-on"></i> 收藏的帖子</span>
        <div class="tabbar-container">
          <outerTie
            v-for="item in likeThread"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :content="item.content"
            :date="item.date"
            :author="item.author"
          ></outerTie>
        </div>
      </el-tab-pane>
      <el-tab-pane name="second">
        <span slot="label"><i class="el-icon-reading"></i> 回复的帖子</span>
        <div class="tabbar-container">
          <outerTie
            v-for="item in replyThread"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :content="item.content"
            :date="item.date"
            :author="item.author"
          ></outerTie>
        </div>
      </el-tab-pane>
      <el-tab-pane name="forth">
        <span slot="label"><i class="el-icon-date"></i> 我的文章</span>
        <div class="tabbar-container">
          <outerTie
            v-for="item in editThread"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :content="item.content"
            :date="item.date"
            :author="item.author"
          ></outerTie>
        </div>
      </el-tab-pane>
      <el-tab-pane name="fifth">
        <span slot="label"><i class="el-icon-chat-dot-square"></i> 私信</span>
        我的行程
      </el-tab-pane>
    </el-tabs>
  </div>
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
      likeThread: [],
      replyThread: [],
      editThread: [],
    };
  },
  created() {
    console.log(localStorage.getItem("user"));
    const userID = localStorage.getItem("user");

    const user = JSON.parse(localStorage.getItem("userMessage"))[userID];
    this.likeThread = JSON.parse(localStorage.getItem("thread")).filter((i) => {
      return user.likeThread.indexOf(i.id) > -1;
    });
    this.replyThread = JSON.parse(localStorage.getItem("thread")).filter(
      (i) => {
        return user.replyThread.indexOf(i.id) > -1;
      }
    );
    this.editThread = JSON.parse(localStorage.getItem("thread")).filter((i) => {
      return user.editThread.indexOf(i.id) > -1;
    });
  },
};
</script>

<style scoped>
.tabbar {
  width: 78%;
  min-height: 185px;
  background-color: white;
  border-right: 1px dotted gray;
}
.tabbar-container {
  margin-bottom: 18px;
}
</style>