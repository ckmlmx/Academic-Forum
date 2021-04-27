import Vue from 'vue'
import VueRouter from 'vue-router'

const shouYe = () => import('../components/main/shouYe.vue')
const c = () => import('../components/main/c.vue')
const java = () => import('../components/main/java.vue')
const python = () => import('../components/main/python.vue')
const javascript = () => import('../components/main/javascript.vue')
const denglu = () => import('../components/main/denglu.vue')
const zhuce = () => import('../components/main/zhuce.vue')
const user = () => import('../components/main/profile/user.vue')
const tiezi = () => import('../components/tiezi/zhutie.vue')
const person = () => import('../components/main/profile/personal-data/person.vue')
const search=()=>import('../components/main/search.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/shouYe'
  },
  {
    path: '/shouYe',
    component: shouYe,
    meta: {
      title: '欢迎来到。。。'
    }
  },
  {
    path: '/java',
    component: java,
    meta: {
      title: 'Java'
    }
  },
  {
    path: '/c',
    component: c,
    meta: {
      title: 'C++'
    }
  },
  {
    path: '/python',
    component: python,
    meta: {
      title: 'Python'
    }
  },
  {
    path: '/javascript',
    component: javascript,
    meta: {
      title: 'JavaScript'
    }
  },
  {
    path: '/denglu',
    component: denglu,
    meta: {
      title: 'denglu'
    }
  },
  {
    path: '/zhuce',
    component: zhuce,
    meta: {
      title: 'zhuce'
    },
  },
  {
    path: '/user',
    component: user,
    meta: {
      title: '个人主页'
    },
  },
  {
    path: '/tiezi',
    component: tiezi,
    meta: {
      title: '帖子'
    }
  },
  {
    path: '/person',
    component: person,
    meta: {
      title: '个人资料'
    }
  },
  {
    path:'/search',
    component:search,
    meta:{
      title:'搜索结果'
    }
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
})
export default router
