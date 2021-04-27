<template>
  <div class="person-data">
    <div class="person-data-head">
      <div class="person-data-head-edit">
        <b>基本信息</b>
        <div>
          <button class="edit-button" @click="$emit('changeMod')">取消</button>
          <button @click="changeMessage">保存</button>
        </div>
      </div>
      <el-divider class="el-divider"></el-divider>
    </div>
    <div class="person-data-body">
      <span>我的昵称</span>
      <div>
        <el-input
          placeholder="请输入昵称，不超过10字"
          v-model="name"
          clearable
          maxlength="10"
        >
        </el-input>
      </div>
    </div>
    <div class="person-data-body">
      <span>我的性别</span>
      <div>
        <button class="sex-button-1" @click="changeMan">男</button>
        <button class="sex-button-2" @click="changeGirl">女</button>
      </div>
    </div>
    <div class="person-data-body">
      <span>我的简介</span>
      <div>
        <el-input
          placeholder="请输入简介，不超过20字"
          v-model="profile"
          clearable
          maxlength="20"
        >
        </el-input>
      </div>
    </div>
    <div class="person-data-body">
      <span>我居住地</span>
      <div>
        <el-input
          placeholder="请输入居住地，不超过10字"
          v-model="place"
          clearable
          maxlength="10"
        >
        </el-input>
      </div>
    </div>
    <div class="person-data-body">
      <span>兴趣爱好</span>
      <div>
        <el-input
          placeholder="请输入爱好，不超过10字"
          v-model="hobby"
          clearable
          maxlength="10"
        >
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      profile: "",
      place: "",
      hobby: "",
      sex: "",
    };
  },
  methods: {
    changeMan() {
      this.sex = "男";
    },
    changeGirl() {
      this.sex = "女";
    },
    changeMessage() {
      const a = JSON.parse(localStorage.getItem("userMessage"));
      a[0].userName = this.name;
      a[0].message = {
        sex: this.sex,
        adress: this.place,
        hobby: this.hobby,
        detail: this.profile,
      };

      localStorage.setItem("userMessage", JSON.stringify(a));
      this.$emit("changeMe", {
        message: {
          sex: this.sex,
          adress: this.place,
          hobby: this.hobby,
          detail: this.profile,
        },
        name: this.name,
      });
    },
  },
};
</script>

<style scoped>
.person-data {
  width: 70%;
  min-height: 500px;
  border: 1px dotted gray;
  margin-top: 30px;
  margin-left: 70px;
}
.person-data-head {
  width: 90%;
  margin: 20px 0 30px 30px;
}
.person-data-head-edit {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.person-data-head-edit button {
  width: 94px;
  height: 40px;
  background-color: #25bb9b;
  border: 0;
  cursor: pointer;
  font-size: 18px;
  color: white;
}
.person-data-head .edit-button {
  background-color: rgb(190, 185, 185);
  margin-right: 30px;
}
.el-divider {
  margin: 5px 0;
}
.person-data-body {
  width: 320px;
  margin: 30px 0 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.person-data-body button {
  width: 70px;
  height: 30px;
  margin-right: 30px;
  cursor: pointer;
  border: 0;
}
.sex-button-1 {
  background-color: greenyellow;
}
.sex-button-2 {
  background-color: pink;
}
</style>