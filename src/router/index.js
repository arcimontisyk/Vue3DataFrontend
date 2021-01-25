import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //{
  //  path: '/',
  //  name: 'Home',
  //  component: () => import('@/views/Home.vue')
  //},
  {
    path: '/',
    name: 'Tina',
    component: () => import('@/views/Tina.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/values',
    name: 'Joint values',
    component: () => import('@/components/table_test.vue')
  },
  {
    path: '/status',
    name: 'Status',
    component: () => import('@/components/table_test.vue')
  }
]

const router = new VueRouter({
  routes, mode: 'history'
})

export default router
