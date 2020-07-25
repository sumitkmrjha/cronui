import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: () => import('../components/cron.vue')
  },
  {
    path: '/add',
    component: () => import('../components/add.vue')
  },
  {
    path: '/edit',
    component: () => import('../components/edit.vue')
  },
  {
    path: '/history',
    component: () => import('../components/history.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
