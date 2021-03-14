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
      <el-button type="danger">回复</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
    };
  },
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