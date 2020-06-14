import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLayout from '../layouts/HomeLayout.vue'
import StoreLayout from '../layouts/StoreLayout.vue'
import CheckoutLayout from '../layouts/CheckoutLayout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: {name: 'home'},
    component: HomeLayout,
    children: [
      {
        path: '/inicio',
        name: 'home',
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/loja',
    redirect: {name: 'store'},
    component: StoreLayout,
    children: [
      {
        path: '/loja',
        name: 'store',
        component: () => import('@/views/Store.vue')
      },
    ]
  },
  {
    path: '/pagamento',
    redirect: {name: 'checkout'},
    component: CheckoutLayout,
    children: [
      {
        path: '/pagamento',
        name: 'checkout',
        component: () => import('@/views/Checkout.vue')
      },
      {
        path: '/concluido',
        name: 'concluded',
        component: () => import('@/views/Concluded.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: {name: 'home'}
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes
})

export default router
