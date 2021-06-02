<template>
  <div>
    <tabbar></tabbar>
    <div class="container">
      <swipe class="swipe"></swipe>
      <isLogin class="isLogin" id="isLogin" v-if="isLogin"></isLogin>
      <not-login class="not-login" id="not-login" v-else></not-login>
      <syTabbar class="syTabbar"></syTabbar>
    </div>
  </div>
</template>

<script>
import tabbar from "../header/tabbar";
import isLogin from "./shouye/is-login.vue";
import swipe from "./shouye/lunbotu";
import notLogin from "./shouye/not-login";
import syTabbar from "./shouye/shouye-tabbar";
import store from "../../store";
export default {
  name: "shouye",
  components: {
    swipe,
    tabbar,
    isLogin,
    notLogin,
    syTabbar,
  },
  data() {
    return {};
  },
  computed: {
    isLogin() {
      return JSON.parse(localStorage.getItem("isLogin"));
    },
  },
  created() {},
};
</script>

<style scoped>
.container {
  margin-top: 30px;
  width: 70%;
  min-height: 150%;
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.swipe {
  position: absolute;
  right: 0;
}
.isLogin {
  position: absolute;
  left: 0;
}
.not-login {
  position: absolute;
  left: 0;
}
.syTabbar {
  width: 70%;
  position: absolute;
  right: 0;
  top: 30%;
}
</style>