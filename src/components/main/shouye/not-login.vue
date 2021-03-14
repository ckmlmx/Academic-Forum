<template>
  <div class="not-login-container">
    <div class="not-login-d1">
      <div class="not-login-d1-img">
        <img src="../../../assets/image/time.jpg" />
      </div>
    </div>
    <p class="not-login-p1">游客</p>
    <el-button type="success" plain class="not-login-p2" @click="to"
      >请登录</el-button
    >
  </div>
</template>

<script>
export default {
  name: "not-login",
  methods: {
    to() {
      this.$router.push("/denglu");
    },
  },
};
</script>

<style>
.not-login-container {
  width: 27%;
  min-height: 400px;
  border: 1px solid rgb(184, 178, 178);
}
.not-login-d1 {
  width: 100%;
  height: 200px;
  background-image: url("../../../assets/image/shouye/logout.png");
  background-repeat: no-repeat;
  background-size: 100% 60%;
}
.not-login-d1-img {
  position: relative;
  width: 40%;
  height: 0;
  margin: 0 auto;
  padding-top: 40%;
}
.not-login-d1-img img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 62px;
  left: 0;
  border-radius: 50%;
  box-shadow: 0 0 10px;
}
.not-login-p1 {
  font-size: 1.5em;
  text-align: center;
  position: relative;
  top: -20px;
}
.not-login-p2 {
  position: relative;
  left: 35%;
}
</style>