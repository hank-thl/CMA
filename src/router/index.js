import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GridView from '../views/GridView.vue'
import ProductView from '../views/ProductView.vue'
import LoginView from '../views/LoginView.vue'
import CheckOutView from '../views/CheckOutView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:num',
    redirect: '/',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },


  {
    path: '/grid/:category',
    name: 'grid',
    component: GridView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },

  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/checkout',

    redirect: '/login'
  },
  {
    path: '/checkout/:memberId?',
    name: 'checkout',
    component: CheckOutView

  },
  {
    path: '/product',
    redirect: '/',
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
