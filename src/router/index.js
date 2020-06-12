import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLayout from '../layouts/HomeLayout.vue'
import StoreLayout from '../layouts/StoreLayout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: 'home',
    component: HomeLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/store',
    redirect: 'store',
    component: StoreLayout,
    children: [
      {
        path: '/store',
        name: 'store',
        component: () => import('@/views/Store.vue')
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import('@/views/Checkout.vue')
      }
    ]
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes
})

export default router
