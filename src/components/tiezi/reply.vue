<template>
  <div class="reply">
    <div class="message">
      <img src="../../assets/image/bg.jpg" />
      <p class="name">{{ name }}</p>
      <!-- <p class="louzhu" v-if="isLouzhu">楼主</p> -->
      <p class="time">{{ date }}</p>
    </div>
    <div class="content">
      {{ content }}
    </div>
    <div class="interaction">
      <i :class="[iconfont, isliked ? 'icon-zan2' : 'icon-zan']" @click="zan"
        >点赞({{ liked }})</i
      >
      <i
        :class="[iconfont, isunliked ? 'icon-zan1' : 'icon-zan-copy']"
        @click="cai"
        >踩({{ unliked }})</i
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
    };
  },
  methods: {
    zan() {
      this.isliked = true;
      this.liked += 1;
      this.isunliked = false;
    },
    cai() {
      this.isliked = false;
      this.unliked += 1;
      this.isunliked = true;
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
.content {
  width: 80%;
  margin-left: 70px;
  margin-top: 10px;
}
.interaction {
  width: 170px;
  height: 30px;
  margin-top: 20px;
  margin-left: 60px;
  display: flex;
  justify-content: space-around;
}
</style>