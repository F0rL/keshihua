import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: () => import('../views/BMap.vue')
  },
  {
    path: '/liquidfill',
    name: 'Liquidfill',
    component: () => import('../views/Liquidfill.vue')
  },
  {
    path: '/wordcloud',
    name: 'WordCloud',
    component: () => import('../views/WordCloud.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
