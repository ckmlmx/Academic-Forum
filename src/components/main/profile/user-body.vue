<template>
  <div class="user-body">
    <userTabbar></userTabbar>
    <userFlow></userFlow>
  </div>
</template>

<script>
import userTabbar from "./user-tabbar";
import userFlow from "./user-flow";
export default {
  components: {
    userTabbar,
    userFlow,
  },
};
</script>

<style scoped>
.user-body {
  position: relative;
  width: 86%;
  min-height: 185px;
  background-color: white;
  margin-left: 30px;
  border: 1px dotted gray;
  overflow: hidden;
  display: flex;
}
</style>