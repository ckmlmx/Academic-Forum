<template>
  <div>
    <tabbar></tabbar>
    <div class="contain">
      <h2 style="margin-top: 20px; margin-left: 20px">你要找的结果如下:</h2>
      <outerTie
        v-for="item in showList"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :content="item.content"
        :date="item.date"
        :author="item.author"
        class="tiezi"
      ></outerTie>
    </div>
  </div>
</template>

<script>
import tabbar from "../header/tabbar";
import outerTie from "../tiezi/outerTie";
export default {
  name: "search",
  components: {
    tabbar,
    outerTie,
  },
  data() {
    return {
      message: this.$route.query.message,
      thread: JSON.parse(localStorage.getItem("java")).thread1,
      showList: [],
    };
  },
  created() {
    console.log(this.thread);
    this.showList = this.thread.filter((i) => {
      return i.title.indexOf(this.message) > -1;
    });
    console.log(this.showList);
  },
};
</script>
<style scoped>
.contain {
  width: 70%;
  min-height: 700px;
  margin: 5% auto;
  background-color: white;
  overflow: hidden;
}
.tiezi {
  margin: 30px auto;
}
</style>
