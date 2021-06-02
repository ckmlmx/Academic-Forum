import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: JSON.parse( localStorage.getItem('isLogin')),
    user: Number,
  },
  mutations: {
    toLogin(state) {
      state.isLogin = true;
    },
    toLogOut(state) {
      state.isLogin = false;
    },
    toUser(state,id){
      state.user=id;
    }
  },
  actions: {
    asyntoLogin({ commit }) {

    }
  },
  modules: {
  }
})
