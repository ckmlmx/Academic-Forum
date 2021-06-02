<template>
  <div class="user-head">
    <img src="../../../assets/image/time.jpg" class="user-image" />
    <div class="user-title">
      <i class="el-icon-edit" @click="toPerson">编辑个人资料</i>
      <div class="user-name">
        <i class="el-icon-user">
          <span>用户名：</span>
          <span>ckm</span>
        </i>
      </div>
      <i class="el-icon-star-off">个人简介:爱冲浪的鱼</i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toPerson() {
      this.$router.push("/person");
    },
  },
};
</script>

<style scoped>
.user-head {
  width: 86%;
  height: 185px;
  background-color: white;
  margin-left: 30px;
  margin-top: 30px;
  border: 1px dotted gray;
}
.user-image {
  position: absolute;
  width: 150px;
  height: 150px;
  left: 50px;
  top: 45px;
}
.user-title {
  position: absolute;
  left: 230px;
  top: 10%;
}
.user-name {
  margin-top: 15%;
  margin-bottom: 15%;
}
.el-icon-edit {
  cursor: pointer;
}
.el-icon-edit:hover {
  color: red;
}
</style>