<template>
  <div>
    <tabbar></tabbar>
    <div class="zhutie-container">
      <zhutieTitle
        class="zhutieTitle"
        :title="thread.title"
        :isliked="islike"
        v-on:changeLike="changeLike"
      ></zhutieTitle>
      <zhutieBody
        :name="thread.author"
        :date="thread.date"
        :content="thread.content"
      ></zhutieBody>
      <zhutieTabbar :comment="comment" :id="id"></zhutieTabbar>
      <zhutieReply :thread="thread" :id="id"></zhutieReply>
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
      thread: {},
      comment: {},
      islike: JSON.parse(localStorage.getItem("userMessage"))[
        localStorage.getItem("user")
      ].likeThread.some((i) => i == this.$route.query.id),
    };
  },
  methods: {
    changeLike(e) {
      const l = JSON.parse(localStorage.getItem("userMessage"));
      if (e) {
        if (
          !l[localStorage.getItem("user")].likeThread.some((i) => i == this.id)
        ) {
          l[localStorage.getItem("user")].likeThread.push(this.id);
        }
        localStorage.setItem("userMessage", JSON.stringify(l));
      } else {
        const index = l[localStorage.getItem("user")].likeThread.indexOf(
          this.id
        );
        if (index > -1) {
          l[localStorage.getItem("user")].likeThread.splice(index, 1);
        }
      }
    },
  },
  created() {
    this.thread = JSON.parse(localStorage.getItem("thread"))[this.id];
    this.comment = JSON.parse(localStorage.getItem("comment"))[this.id];
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