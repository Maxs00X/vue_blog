import Vue from 'vue'
import VueRouter from 'vue-router'
import signup from '../views/signup'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
  {
    path : "/signup" ,
    component : signup
  },
  {
    path : "/",
    redirect : '/Main'
  },
  {
    path: "/Main",
    component: Main
  }
]

const router = new VueRouter({
  routes
})

export default router
