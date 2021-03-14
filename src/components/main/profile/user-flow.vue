<template>
  <div class="user-flow">
    <el-tabs :tab-position="tabPosition" class="flow">
      <el-tab-pane label="我关注的人">
        <img src="../../../assets/image/time.jpg" class="user-flow-image" />
        <img src="../../../assets/image/time.jpg" class="user-flow-image" />
        <img src="../../../assets/image/time.jpg" class="user-flow-image" />
        <img src="../../../assets/image/time.jpg" class="user-flow-image" />
      </el-tab-pane>
      <el-tab-pane label="我的粉丝">
        <img src="../../../assets/image/time.jpg" class="user-flow-image" />
        <img src="../../../assets/image/time.jpg" class="user-flow-image" />
        <img src="../../../assets/image/time.jpg" class="user-flow-image" />
        <img src="../../../assets/image/time.jpg" class="user-flow-image" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "left",
    };
  },
};
</script>

<style scoped>
.user-flow {
  /* border: 1px dotted gray; */
  background-color: white;
  margin-top: 45px;
  margin-bottom: 45px;
}

.user-flow-image {
  display: block;
  width: 50px;
  height: 50px;
  margin: 10%;
}
</style>