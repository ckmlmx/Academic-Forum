<template>
  <div>
    <tabbar></tabbar>
    <div class="person">
      <div class="title"><h2>个人简介</h2></div>
      <personImage></personImage>
      <personData2 v-if="isEdit" v-on:changeMod="changeIsedit"></personData2>
      <personData1 v-else v-on:changeMod="changeIsedit"></personData1>
    </div>
  </div>
</template>

<script>
import tabbar from "../../../header/tabbar";
import personImage from "./person-head";
import personData1 from "./person-data1";
import personData2 from "./person-data2";
export default {
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    changeIsedit() {
      this.isEdit = !this.isEdit;
    },
  },
  components: {
    tabbar,
    personImage,
    personData1,
    personData2,
  },
};
</script>

<style scoped>
.person {
  width: 65%;
  margin: 40px auto;
  background-color: white;
  min-height: 1000px;
  overflow: hidden;
}
.title {
  margin: 20px 0 30px 50px;
  width: 80%;
  border-bottom: 5px ridge gray;
}
.person h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>