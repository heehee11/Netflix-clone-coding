
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('../components/FlixView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../components/ProfileView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
