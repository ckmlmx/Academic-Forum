<template>
  <div>
    <tabbar></tabbar>
    <div class="container">
      <userHead></userHead>
      <userBody></userBody>
      <!-- <user-tabbar></user-tabbar>
      <user-flow></user-flow> -->
    </div>
  </div>
</template>

<script>
import tabbar from "../../header/tabbar.vue";
import userHead from "./user-head";
import userBody from "./user-body";
export default {
  name: "user",
  components: {
    tabbar,
    userHead,
    userBody,
  },
};
</script>

<style scoped>
.container {
  width: 70%;
  min-height: 600px;
  background-color: #f9f9f9;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2%;
  margin-bottom: 2%;
  overflow: hidden;
}
</style>