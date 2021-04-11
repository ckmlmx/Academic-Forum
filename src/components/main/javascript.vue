<template>
  <div>
    <tabbar></tabbar>
    <img src="../../assets/image/top.jpg" class="java-img" />
    <tBody class="java-body">
      <div class="java-top">
        <isImage :url="url" wid="200px" high="200px" class="isImage"></isImage>
        <div>
          <p class="java-a">这是javascript的世界</p>
          <a href="#write-container"><i class="el-icon-edit">我要发帖</i></a>
        </div>
      </div>
      <moduleTop></moduleTop>
      <moduleTabbar></moduleTabbar>
    </tBody>
  </div>
</template>

<script>
import tabbar from "../header/tabbar";
import tBody from "../module/module-body";
import isImage from "../public/isImage";
import moduleTop from "../module/module-top";
import moduleTabbar from "../module/moudle-tabbar";
export default {
  name: "javasript",
  components: {
    tabbar,
    tBody,
    isImage,
    moduleTop,
    moduleTabbar,
  },
  data() {
    return {
      url: require("../../assets/image/time.jpg"),
    };
  },
};
</script>

<style scoped>
.clear {
  clear: both;
}
.java-img {
  display: block;
  width: 70%;
  margin: 3% auto;
}
.java-body {
  top: 40%;
}
.java-top {
  width: 37%;
  position: relative;
  left: 3%;
  top: -90px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: -8%;
}
.java-top p {
  font-size: 1.5em;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
}
.el-icon-edit {
  margin-top: 30px;
  color: blue;
}
.el-icon-edit:hover {
  color: rgb(94, 94, 228);
  cursor: pointer;
}
</style>