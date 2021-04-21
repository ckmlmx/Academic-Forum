<template>
  <div class="body">
    <div class="container">
      <div class="item">
        <div><img src="../../assets/image/time.jpg" /></div>
        <div>
          <el-form
            label-width="100px"
            class="item1"
            :model="user"
            :rules="rules"
            ref="form"
          >
            <el-form-item label="账号" prop="userName">
              <el-input
                prefix-icon="el-icon-user-solid"
                placeholder="用户名/手机号"
                v-model="user.userName"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
              <el-input
                prefix-icon="el-icon-s-goods"
                placeholder="密码"
                v-model="user.passWord"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 100%" @click="handleLogin"
                >立即登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="item2">
          <p>忘记密码</p>
          <p>|</p>
          <p><router-link to="zhuce">立即注册</router-link></p>
        </div>
      </div>
      <el-button class="return" type="primary" plain @click="toShouye"
        >返回首页</el-button
      >
    </div>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "denglu",
  data() {
    return {
      user: {
        userName: "",
        passWord: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    toShouye() {
      this.$router.push("/shouYe");
    },
    handleLogin() {
      if (this.user.userName && this.user.passWord) {
        const userMessage = JSON.parse(localStorage.getItem("userMessage"))[0];
        if (
          this.user.userName == userMessage.userName &&
          this.user.passWord == userMessage.passWord
        ) {
          store.commit("toLogin");
          this.$router.push("/shouYe");
        } else {
          alert("账号或密码错误");
        }
      } else {
        alert("请输入账号密码");
      }
    },
  },
};
</script>

<style scoped>
a:hover {
  color: black;
}
.body {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../../assets/image/bg3.jpg");
}
.container {
  display: flex;
  width: 30%;
  height: 600px;
  background-color: rgb(255, 255, 255);
  opacity: 0.9;
  border: 0.5px solid bisque;
  border-radius: 25px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-top: 60px;
  justify-content: center;
  align-items: center;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 400px;
}
.item1 {
  transform: translate(-13%);
}
.item img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.item2 {
  width: 200px;
  display: flex;
  color: rgb(189, 188, 188);
  justify-content: space-around;
}
.item2 > p:hover {
  color: black;
}
.return {
  position: absolute;
  bottom: 5%;
}
</style>