<template>
  <div class="container">
    <div class="item1">
      <p class="word1">欢迎</p>
      <p class="word2">来到语言的世界</p>
    </div>
    <div class="item2">
      <div class="header">
        <h1>欢迎注册</h1>
        <p><router-link to="denglu">已有账号？登录</router-link></p>
      </div>
      <div class="main">
        <el-form
          ref="form"
          label-width="80px"
          size="medium"
          class="form"
          :model="ruleform"
          :rules="rules"
        >
          <el-form-item label="用户名" class="form-item" prop="userName">
            <el-input class="input" v-model="ruleform.userName"></el-input>
          </el-form-item>
          <el-form-item label="手机号" class="form-item" prop="tel">
            <el-input class="input" v-model="ruleform.tel"></el-input>
          </el-form-item>
          <el-form-item label="密码" class="form-item" prop="passWord">
            <el-input
              class="input"
              v-model="ruleform.passWord"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" class="form-item" prop="yanZheng">
            <el-input
              class="input input1"
              v-model="ruleform.yanZheng"
            ></el-input>
            <el-button @click="sendMessage" v-if="setTime"
              >获取验证码</el-button
            >
            <elel-button v-else>{{ time }}S</elel-button>
          </el-form-item>
          <el-form-item class="form-item">
            <el-button round type="primary" @click="Login">立即注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "zhuce",
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (value.length > 8) {
        return callback(new Error("用户名过长"));
      } else {
        callback();
      }
    };
    var checkPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      } else if (value.length > 16) {
        return callback(new Error("密码过长"));
      } else {
        callback();
      }
    };
    var checkTel = (rule, value, callback) => {
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else if (!myreg.test(value)) {
        return callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    return {
      ruleform: {
        userName: "",
        passWord: "",
        tel: "",
        yanZheng: "",
      },
      rules: {
        userName: [{ validator: checkName, trigger: "blur" }],
        tel: [{ validator: checkTel, trigger: "blur" }],
        passWord: [{ validator: checkPass, trigger: "blur" }],
        yanZheng: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
      setTime: true,
      time: 60,
    };
  },
  methods: {
    Login() {
      if (
        this.ruleform.userName &&
        this.ruleform.passWord &&
        this.ruleform.tel &&
        this.ruleform.yanZheng
      ) {
        store.state.isLogin = true;
        this.$router.push("/shouYe");
      } else {
        this.$message({
          type: "error",
          message: "请完善信息",
        });
      }
    },
    sendMessage() {
      this.setTime = false;
      timer = setInterval(() => {
        this.time = this.time - 1;
        if (this.time == 0) {
          this.setTime = true;
          clearInterval(timer);
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
a:hover {
  color: red;
}
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/image/bg4.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
}
.item1 {
  transform: translate(300px, 550px);
  position: absolute;
  color: white;
}
.word1 {
  font-size: 42px;
  display: inline-block;
  margin-right: 20px;
}
.word2 {
  display: inline-block;
  font-size: 30px;
}

.item2 {
  width: 450px;
  height: 600px;
  background-color: white;
  transform: translate(190%, 10%);
  border: 0.5px solid lightgray;
  border-radius: 10px;
  opacity: 0.8;
}
.header {
  position: relative;
  left: 5%;
  top: 5%;
}
.form {
  padding-top: 50px;
  padding-bottom: 30px;
}
.form-item {
  padding-top: 10px;
}
.input {
  width: 90%;
}
.input1 {
  width: 50%;
  margin-right: 40px;
}
</style>