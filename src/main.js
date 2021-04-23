import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/public.css'
import 'swiper/dist/css/swiper.css'
import './assets/css/icon/iconfont.css'
Vue.use(ElementUI);
// axios.defaults.baseURL = "localhost:8080/"
Vue.prototype.axios = axios
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
