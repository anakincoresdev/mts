import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/questions',
    name: 'questions',
    component: () => import(/* webpackChunkName: "about" */ '../views/questions.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "about" */ '../views/create.vue')
  },
  {
    path: '/create-project',
    name: 'create-project',
    component: () => import(/* webpackChunkName: "about" */ '../views/create-project.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin.vue')
  },
  {
    path: '/show/:id',
    name: 'show',
    component: () => import(/* webpackChunkName: "about" */ '../views/show.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
