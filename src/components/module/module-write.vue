<template>
  <div class="write-container" id="write-container">
    <div class="write-top">
      <img src="../../assets/image/fatie.png" class="write-top-image" />
      <b>发表新帖</b>
    </div>
    <div class="write-title">
      <el-input
        type="text"
        placeholder="请输入标题"
        v-model="text.title"
        maxlength="20"
        show-word-limit
      >
      </el-input>
    </div>
    <div class="write-body">
      <el-input
        type="textarea"
        :autosize="{ minRows: 6, maxRows: 10 }"
        placeholder="请输入内容"
        v-model="text.textarea"
        resize="none"
      >
      </el-input>
    </div>
    <div class="fabiao">
      <el-button type="primary" @click="submit">发表</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
  },
  data() {
    return {
      text: {
        title: "",
        textarea: "",
      },
      ckm: "java",
    };
  },
  methods: {
    submit() {
      if (this.text.title && this.text.textarea) {
        const thread1 = JSON.parse(localStorage.getItem("java")).thread1;
        const date = new Date();
        const newThread = {
          id: thread1.length + 1,
          title: this.text.title,
          content: this.text.textarea,
          date: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
          author: "cc",
        };
        thread1.push(newThread);
        localStorage.setItem("java", JSON.stringify({ thread1 }));
        window.location.assign(`http://localhost:8080/${this.type}`);
        this.text.title = "";
        this.text.textarea = "";
      } else {
        this.$message({
          type: "error",
          message: "请写好标题和内容",
        });
      }
    },
  },
  mounted() {
    console.log("a", this.type);
  },
};
</script>

<style scoped>
.write-container {
  width: 100%;
  min-height: 300px;
  background-color: rgb(245, 238, 238);
  margin-top: 30px;
  margin-bottom: 30px;
  overflow: hidden;
}
.write-top {
  margin: 20px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.write-top-image {
  width: 20px;
  height: 20px;
}
.write-title {
  width: 686px;
  margin: 20px;
}
.write-body {
  margin: 20px;
  width: 686px;
}
.fabiao {
  margin: 20px;
}
</style>