<template>
  <div>
    <tabbar></tabbar>
    <div class="zhutie-container">
      <zhutieTitle
        class="zhutieTitle"
        :title="reply.title"
        :isliked="reply.like"
      ></zhutieTitle>
      <zhutieBody
        :name="reply.author"
        :date="reply.date"
        :content="reply.content"
      ></zhutieBody>
      <zhutieTabbar
        :comment="reply.comment"
        :reply="reply"
        :id="id"
      ></zhutieTabbar>
      <zhutieReply :reply="reply" :id="id"></zhutieReply>
    </div>
  </div>
</template>

<script>
import tabbar from "../header/tabbar";
import zhutieTitle from "./zhutie-title";
import zhutieBody from "./zhutie-body";
import zhutieTabbar from "./zhutie-tabbar";
import zhutieReply from "./zhutieReply";
export default {
  name: "tiezi",
  components: {
    tabbar,
    zhutieTitle,
    zhutieBody,
    zhutieTabbar,
    zhutieReply,
  },
  data() {
    return {
      id: this.$route.query.id,
      reply: {},
    };
  },
  created() {
    this.reply = JSON.parse(localStorage.getItem("java")).thread1[this.id - 1];
  },
};
</script>

<style scoped>
.zhutie-container {
  width: 70%;
  min-height: 1000px;
  margin-top: 30px;
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>