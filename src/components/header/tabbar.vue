<template>
  <div class="header">
    <ul class="container">
      <li class="shouye">首页</li>
      <li>Java</li>
      <li>C++</li>
      <li>Python</li>
      <li>JavaScript</li>
    </ul>
    <div class="profile">
      <p>登录</p>
      <p>|</p>
      <p>注册</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: rgb(26, 25, 25);
  color: rgb(193, 204, 214);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.container {
  flex-basis: 40%;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.profile {
  flex-basis: 5%;
  display: flex;
  justify-content: space-around;
}
</style>