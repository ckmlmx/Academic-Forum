<template>
  <div class="person-data">
    <div class="person-data-head">
      <div>
        <b>基本信息</b>
        <button @click="$emit('changeMod')">编辑</button>
      </div>
      <el-divider class="el-divider"></el-divider>
    </div>
    <div class="person-data-body">
      <span>我的昵称</span>
      <span class="person-data-body-1">{{ userName }}</span>
    </div>
    <div class="person-data-body">
      <span>我的性别</span>
      <span class="person-data-body-1">{{ sex }}</span>
    </div>
    <div class="person-data-body">
      <span>我的简介</span>
      <span class="person-data-body-1">{{ detail }}</span>
    </div>
    <div class="person-data-body">
      <span>我居住地</span>
      <span class="person-data-body-1">{{ adress }}</span>
    </div>
    <div class="person-data-body">
      <span>兴趣爱好</span>
      <span class="person-data-body-1">{{ hobby }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: Object,
    name: String,
  },
  data() {
    return {
      userName: this.name,
      sex: this.message.sex,
      detail: this.message.detail,
      adress: this.message.adress,
      hobby: this.message.hobby,
    };
  },
  methods: {},
  created() {},
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
.person-data-head div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.person-data-head button {
  width: 94px;
  height: 40px;
  background-color: #25bb9b;
  border: 0;
  cursor: pointer;
  font-size: 18px;
  color: white;
}
.el-divider {
  margin: 5px 0;
}
.person-data-body {
  margin: 30px 0 30px 60px;
}
.person-data-body-1 {
  color: gray;
  margin-left: 50px;
}
</style>