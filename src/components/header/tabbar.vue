<template>
  <div class="header">
    <ul class="container">
      <li><router-link to="/shouYe">首页</router-link></li>
      <li><router-link to="/java">Java</router-link></li>
      <li><router-link to="/c">C++</router-link></li>
      <li><router-link to="/python">Python</router-link></li>
      <li><router-link to="/javascript">JavaScrpt</router-link></li>
    </ul>
    <div>
      <el-button
        icon="el-icon-search"
        type="primary"
        style="color: black"
        @click="toSearch"
        >搜索</el-button
      >
      <el-input style="width: 500px" v-model="search" />
    </div>

    <el-menu class="logIn" mode="horizontal" v-if="isLogin">
      <el-submenu index="2">
        <template slot="title"
          ><img src="../../assets/image/time.jpg"
        /></template>
        <el-menu-item index="2-1" class="menu-item" @click="toUser"
          >我的主页</el-menu-item
        >
        <el-menu-item index="2-2" class="menu-item">我的帖子</el-menu-item>
        <el-menu-item index="2-3" class="menu-item">我的收藏</el-menu-item>
        <el-menu-item index="2-3" class="menu-item" @click="quict"
          >退出论坛</el-menu-item
        >
      </el-submenu>
    </el-menu>
    <div class="profile" v-else>
      <p><router-link to="/denglu">登录</router-link></p>
      <p>|</p>
      <p><router-link to="zhuce">注册</router-link></p>
    </div>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "tabbar",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    isLogin() {
      return store.state.isLogin;
    },
  },
  methods: {
    toUser() {
      this.$router.push("/user");
    },
    quict() {
      localStorage.setItem("isLogin", JSON.stringify(false));
      store.commit("toLogOut");
    },
    toSearch() {
      this.$router.push({ path: "search", query: { message: this.search } });
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: rgb(22, 21, 21);
  color: rgb(193, 204, 214);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.container {
  flex-basis: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.profile {
  flex-basis: 10%;
  display: flex;
  justify-content: space-around;
}
.router-link-active {
  font-size: 25px;
  color: rgb(20, 157, 220);
}
.logIn {
  text-align: center;
  z-index: 10;
  background-color: black;
}
.logIn img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>