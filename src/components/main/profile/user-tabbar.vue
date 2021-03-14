<template>
  <div class="tabbar">
    <el-tabs v-model="activeName" class="user-tab">
      <el-tab-pane name="first">
        <span slot="label"><i class="el-icon-star-on"></i> 收藏的帖子</span>
        <div class="tabbar-container">
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
        </div>
      </el-tab-pane>
      <el-tab-pane name="second">
        <span slot="label"><i class="el-icon-reading"></i> 回复的帖子</span>
        <div class="tabbar-container">
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
        </div>
      </el-tab-pane>
      <el-tab-pane name="third">
        <span slot="label"
          ><i class="el-icon-s-opportunity"></i> 赞过的帖子</span
        >
        <div class="tabbar-container">
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
        </div>
      </el-tab-pane>
      <el-tab-pane name="forth">
        <span slot="label"><i class="el-icon-date"></i> 我的文章</span>
        <div class="tabbar-container">
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
          <outerTie></outerTie>
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
    };
  },
};
</script>

<style scoped>
.tabbar {
  width: 76%;
  min-height: 185px;
  background-color: white;
  border-right: 1px dotted gray;
}
.tabbar-container {
  margin-bottom: 18px;
}
</style>