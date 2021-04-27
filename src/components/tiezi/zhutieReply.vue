<template>
  <div class="reply" id="replay">
    <b class="title">发表你的回复</b>
    <div class="write-body">
      <el-input
        type="textarea"
        :autosize="{ minRows: 6, maxRows: 10 }"
        placeholder="留下你的神评"
        v-model="textarea"
        resize="none"
      >
      </el-input>
    </div>
    <div class="fabiao">
      <el-button type="danger" @click="send">回复</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reply: Object,
    id: String,
  },
  data() {
    return {
      textarea: "",
    };
  },
  methods: {
    send() {
      if (this.textarea) {
        if (JSON.parse(localStorage.getItem("isLogin"))) {
          const thread = JSON.parse(localStorage.getItem("java"));
          const name = JSON.parse(localStorage.getItem("userMessage"))[0]
            .userName;
          const date = new Date();
          const re = {
            name: name,
            date: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
            content: this.textarea,
            liked: 0,
            unliked: 0,
            isliked: false,
            isunliked: false,
          };
          thread.thread1[this.id - 1].comment.push(re);
          localStorage.setItem("java", JSON.stringify(thread));
          this.$message({
            type: "success",
            message: "回复成功",
          });
          window.location.reload();
        } else {
          this.$message({
            type: "error",
            message: "请登录",
          });
        }
      } else {
        this.$message({
          type: "error",
          message: "请写下你要说的话",
        });
      }
    },
  },
  created() {},
};
</script>

<style scoped>
.reply {
  width: 70%;
  min-height: 300px;
  background-color: #f9f9f9;
  margin-left: 30px;
  margin-bottom: 30px;
  overflow: hidden;
  margin-top: 30px;
  border: 1px dotted black;
}
.title {
  display: block;
  margin-top: 20px;
  margin-left: 30px;
}
.write-body {
  margin: 20px;
  width: 686px;
}
.fabiao {
  margin: 20px;
}
</style>