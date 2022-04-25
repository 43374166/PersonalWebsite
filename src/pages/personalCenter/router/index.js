import Vue from 'vue'
import VueRouter from 'vue-router'
const Portfolio = () => import('../childcomps/Portfolio.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/personalcenter/:id/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/personalcenter/:id/portfolios',
    name: 'Portfolios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../childcomps/Portfolios.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
