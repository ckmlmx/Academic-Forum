<template>
  <el-tabs type="border-card" class="tabbar">
    <el-tab-pane label="热门回复" style="position: relative; min-height: 400px">
      <reply
        v-for="(item, index) in comment"
        :key="index"
        :name="item.name"
        :date="item.date"
        :content="item.content"
        :liked="item.liked"
        :unliked="item.unliked"
        :id="id"
        :commentID="index"
        @changeLike="changeLike"
      ></reply>
      <div style="clear: both; height: 100px"></div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pages"
        class="pagination"
      >
      </el-pagination>
    </el-tab-pane>
    <el-tab-pane label="最新回复" style="position: relative; min-height: 400px">
      <reply
        v-for="(item, index) in comment"
        :key="index"
        :name="item.name"
        :date="item.date"
        :content="item.content"
        :liked="item.liked"
        :unliked="item.unliked"
        :isliked="item.isliked"
        :isunliked="item.isunliked"
      ></reply>
      <div style="clear: both; height: 100px"></div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pages"
        class="pagination"
      >
      </el-pagination>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import reply from "./reply";
export default {
  components: {
    reply,
  },
  props: {
    comment: Array,
    id: String,
  },
  data() {
    return {
      thread1: [],
      thread2: [],
      like: JSON.parse(localStorage.getItem("userMessage"))[
        localStorage.getItem("user")
      ].likeComment[this.id],
      unlike: JSON.parse(localStorage.getItem("userMessage"))[
        localStorage.getItem("user")
      ].unlikeComment[this.id],
      commentArr: this.comment,
    };
  },
  computed: {
    pages() {
      return this.comment.length * 10;
    },
  },

  methods: {
    changeLike(e) {
      this.commentArr[e.commentID].liked = e.like;
      this.commentArr[e.commentID].unliked = e.unlike;

      if (e.islike && this.like.indexOf(e.commentID) == -1) {
        this.like.push(e.commentID);
      }
      if (!e.islike && this.like.indexOf(e.commentID) > -1) {
        this.like.splice(this.like.indexOf(e.commentID), 1);
      }
      if (e.isunlike && this.unlike.indexOf(e.commentID) == -1) {
        this.unlike.push(e.commentID);
      }
      if (!e.isunlike && this.unlike.indexOf(e.commentID) > -1) {
        this.unlike.splice(this.unlike.indexOf(e.commentID), 1);
      }
    },
  },
  created() {},
  beforeDestroy() {
    const userMessage = JSON.parse(localStorage.getItem("userMessage"));
    userMessage[localStorage.getItem("user")].likeComment[this.id] = this.like;
    userMessage[localStorage.getItem("user")].unlikeComment[
      this.id
    ] = this.unlike;
    localStorage.setItem("userMessage", JSON.stringify(userMessage));

    const comment = JSON.parse(localStorage.getItem("comment"));
    comment[this.id] = this.commentArr;
    localStorage.setItem("comment", JSON.stringify(comment));
  },
};
</script>

<style scoped>
.tabbar {
  width: 70%;
  min-height: 400px;
  background-color: #f9f9f9;
  margin-left: 30px;
  margin-bottom: 30px;
  overflow: hidden;
  margin-top: 30px;
  border: 1px dotted black;
  position: relative;
}
.reply-tabbar {
  background-color: #f9f9f9;
  min-height: 400px;
}
.message {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
  margin-top: 10px;
}
.message img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.message .name {
  margin-left: 10px;
  color: blueviolet;
}
.message .louzhu {
  margin-left: 10px;
  width: 45px;
  height: 25px;
  border-radius: 10px;
  background-color: rgb(175, 170, 170);
  text-align: center;
}
.message .time {
  margin-left: 10px;
  color: gray;
}
.pagination {
  margin-top: 30px;
  margin-bottom: 30px;
  position: absolute;
  z-index: 10;
  bottom: 0;
}
</style>