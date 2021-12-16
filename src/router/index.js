import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/ Login/Login.vue'
import SignUp from '../views/SignUp/SignUp.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/Login',
    name: 'Login',
    component: Login
  }, {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
