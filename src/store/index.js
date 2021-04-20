import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: Object,
    shouye: {
      thread1: [
        {
          id: 1,
          title: "怎么实现JS序列化?",
          content: "请教一下大家，怎么把js对象序列化",
          date: "2021/1/15",
          author: "喝水的鱼",
        },
        {
          id: 3,
          title: "git解决冲突",
          content: "在工作中，我们往往是多人开发的......",
          date: "2021/1/20",
          author: "小明",
        },
        {
          id: 4,
          title: "JAVA搭建微服务器?",
          content: "微服务 - 微服务的作用 - 微服务框架......",
          date: "2021/2/1",
          author: "白云",
        },
        {
          id: 5,
          title: "C++的输出格式?",
          content: "一.使用控制符控制输出格式......",
          date: "2021/2/4",
          author: "夜行客",
        },
      ],
    },
    java: {
      thread1: [
        {
          id: 1,
          title: "怎么实现JS序列化?",
          content: "请教一下大家，怎么把js对象序列化",
          date: "2021/1/15",
          author: "喝水的鱼",
        },
        {
          id: 3,
          title: "git解决冲突",
          content: "在工作中，我们往往是多人开发的......",
          date: "2021/1/20",
          author: "小明",
        },
        {
          id: 4,
          title: "JAVA搭建微服务器?",
          content: "微服务 - 微服务的作用 - 微服务框架......",
          date: "2021/2/1",
          author: "白云",
        },
        {
          id: 5,
          title: "C++的输出格式?",
          content: "一.使用控制符控制输出格式......",
          date: "2021/2/4",
          author: "夜行客",
        },
      ],
    }
  },
  mutations: {
    toLogin(state) {
      state.isLogin = true;
    },
    toLogOut(state) {
      state.isLogin = false;
    }
  },
  actions: {
    asyntoLogin({ commit }) {

    }
  },
  modules: {
  }
})
