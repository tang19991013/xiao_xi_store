import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index from '../views/index'
import order from '../views/order'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/',
        name: 'index',
        component: index,
      },
      {
        path: '/product/:lid',
        name: 'product',
        component: () => import(/* webpackChunkName: "about" */ '../views/product.vue')
      },
      {
        path: '/details/:lid',
        name: 'details',
        component: () => import(/* webpackChunkName: "about" */ '../views/details.vue')
      }
    ]
  },
  {
    path:"/order",
    name:"order",
    component:order,
    children:[
      {
        path: 'order_confirm',
        name: 'order_confirm',
        component: () => import(/* webpackChunkName: "about" */ '../views/order_confirm.vue')
      },
      {
        path: 'order_close',
        name: 'order_close',
        component: () => import(/* webpackChunkName: "about" */ '../views/order_close.vue')
      },
      {
        path: 'order_list',
        name: 'order_list',
        component: () => import(/* webpackChunkName: "about" */ '../views/order_list.vue')
      },
      {
        path: 'notdata',
        name: 'notdata',
        component: () => import(/* webpackChunkName: "about" */ '../views/notdata.vue')
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import(/* webpackChunkName: "about" */ '../views/reg.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/cart.vue')
  },
  {
    path: '/alipay',
    name: 'alipay',
    component: () => import(/* webpackChunkName: "about" */ '../views/alipay.vue')
  },
  // {
  //   path: '/',
  //   name: '',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
