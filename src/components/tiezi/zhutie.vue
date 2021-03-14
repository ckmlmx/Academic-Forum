<template>
  <div>
    <tabbar></tabbar>
    <div class="zhutie-container">
      <zhutieTitle class="zhutieTitle"></zhutieTitle>
      <zhutieBody></zhutieBody>
      <zhutieTabbar></zhutieTabbar>
      <zhutieReply></zhutieReply>
    </div>
  </div>
</template>

<script>
import tabbar from "../header/tabbar";
import zhutieTitle from "./zhutie-title";
import zhutieBody from "./zhutie-body";
import zhutieTabbar from "./zhutie-tabbar";
import zhutieReply from "./zhutieReply";
export default {
  name: "tiezi",
  components: {
    tabbar,
    zhutieTitle,
    zhutieBody,
    zhutieTabbar,
    zhutieReply,
  },
};
</script>

<style scoped>
.zhutie-container {
  width: 70%;
  min-height: 1000px;
  margin-top: 30px;
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>