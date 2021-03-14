<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from "./components/header/tabbar";
import Tabbar from "./components/header/tabbar.vue";
export default {
  components: {
    tabbar,
  },
};
</script>

<style>
</style>