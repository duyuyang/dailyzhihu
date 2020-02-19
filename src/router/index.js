import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'
// 首页
import index from '@/views/index.vue'
// 文章详情
import textDetails from '@/views/textDetails.vue'
// 我的页
import oneself from '@/views/oneself.vue'
// 评论
import comment from '@/views/comment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/textDetails',
    name: 'textDetails',
    component: textDetails
  },
  {
    path: '/oneself',
    name: 'oneself',
    component: oneself
  },
  {
    path: '/comment',
    name: 'comment',
    component: comment
  }
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
