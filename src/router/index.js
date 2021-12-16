import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/ Login/Login.vue'
import SignUp from '../views/SignUp/SignUp.vue'
import Content from '../views/Content/Content.vue'
import Publish from '../views/Publish/Publish.vue'

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
  }, {
    path: '/Content',
    name: 'Content',
    component: Content
  }, {
    path: '/Publish',
    name: 'Publish',
    component: Publish
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

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (localStorage.getItem('loginResult')) { // 判断本地是否存在access_token
//       next()
//     } else {
//       if (to.path === '/login') {
//         next()
//       } else {
//         next({
//           path: '/login'
//         })
//       }
//     }
//   } else {
//     next()
//   }
//   /* 如果本地 存在 token 则 不允许直接跳转到 登录页面 */
//   if (to.fullPath === '/login') {
//     if (localStorage.getItem('loginResult')) {
//       next({
//         path: from.fullPath
//       })
//     } else {
//       next()
//     }
//   }
// })
