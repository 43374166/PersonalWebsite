// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import('../login/Login.vue')
//   },
//   {
//     path: '/register',
//     name: 'Register',
//     component: () => import('../register/Register.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })


// const originalPush = VueRouter.prototype.push
 
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

// export default router;