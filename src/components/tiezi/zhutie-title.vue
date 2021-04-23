<template>
  <div class="zhutie-title">
    <b>{{ title }}</b>
    <div>
      <a href="#replay" class="toreplay"
        ><el-button type="primary" icon="el-icon-edit" size="small"
          >回复</el-button
        ></a
      >
      <el-button
        type="primary"
        icon="el-icon-star-on"
        size="small"
        v-if="isliked"
        @click="picked"
        >收藏</el-button
      >
      <el-button
        type="primary"
        icon="el-icon-star-off"
        size="small"
        v-else
        @click="picked"
        >收藏</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isliked: {
      type: Boolean,
      default: false,
    },
    title: String,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    picked() {
      this.isliked = !this.isliked;
    },
  },
};
</script>

<style scoped>
.zhutie-title {
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 10px 30px;
  position: sticky;
  top: 0;
  /* border: 1px dotted black;
  border-collapse: collapse; */
  background-color: white;
  z-index: 10;
}
.zhutie-title b {
  margin-left: 30px;
}
.zhutie-title div {
  margin-right: 30px;
}
.toreplay {
  margin-right: 20px;
}
</style>