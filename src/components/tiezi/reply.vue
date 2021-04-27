<template>
  <div class="reply">
    <div class="message">
      <div
        v-on="{ mouseover: mouseOver, mouseout: mouseOff }"
        style="width: 60px; position: relative"
      >
        <img src="../../assets/image/bg.jpg" />
        <div :class="[mouseON ? 'on' : 'off']">
          <el-button type="danger">关注</el-button>
          <el-button type="primary">私信</el-button>
        </div>
      </div>
      <p class="name">{{ name }}</p>
      <p class="time">{{ date }}</p>
    </div>
    <div class="content">
      {{ content }}
    </div>
    <div class="interaction">
      <i
        :class="[iconfont, islike ? 'icon-zan2' : 'icon-zan']"
        @click="zan"
        style="cursor: pointer"
        >点赞({{ like }})</i
      >
      <i
        :class="[iconfont, isunlike ? 'icon-zan1' : 'icon-zan-copy']"
        @click="cai"
        style="cursor: pointer"
        >踩({{ unlike }})</i
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "ckm",
    },
    date: String,
    content: String,
    liked: Number,
    unliked: Number,
    isliked: {
      type: Boolean,
      default: false,
    },
    isunliked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      iconfont: "iconfont",
      mouseON: false,
      like: this.liked,
      unlike: this.unliked,
      islike: this.isliked,
      isunlike: this.isunliked,
    };
  },
  methods: {
    zan() {
      if (this.islike == false && this.isunlike == false) {
        this.islike = true;
        this.like += 1;
      } else if (this.islike == false && this.isunlike == true) {
        this.islike = true;
        this.like += 1;
        this.isunlike = false;
        this.unlike -= 1;
      } else if (this.islike == true && this.isunlike == false) {
        this.islike = false;
        this.like -= 1;
      }
    },
    cai() {
      if (this.islike == false && this.isunlike == false) {
        this.isunlike = true;
        this.unlike += 1;
      } else if (this.islike == false && this.isunlike == true) {
        this.isunlike = false;
        this.unlike -= 1;
      } else if (this.islike == true && this.isunlike == false) {
        this.isunlike = true;
        this.unlike += 1;
        this.islike = false;
        this.like -= 1;
      }
    },
    mouseOver() {
      this.mouseON = true;
    },
    mouseOff() {
      this.mouseON = false;
    },
  },
  created() {},
};
</script>

<style scoped>
.reply {
  width: 97%;
  min-height: 180px;
  margin: 0px auto;
  border-top: 1px dotted rgb(117, 115, 115);
  border-bottom: 1px dotted rgb(122, 119, 119);
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
  margin-left: 35px;
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
.content {
  width: 80%;
  margin-left: 94px;
  margin-top: 10px;
}
.interaction {
  width: 170px;
  height: 30px;
  margin-top: 20px;
  margin-left: 80px;
  display: flex;
  justify-content: space-around;
}
.off {
  display: none;
}
.on {
  position: absolute;
  left: 55px;
  top: 5px;
  width: 150px;
}
.icon-zan2 {
  color: red;
}
.icon-zan1 {
  color: grey;
}
</style>