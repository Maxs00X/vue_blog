import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path : "/Login" ,
    component : Login
  },
  {
    path : "/",
    redirect : '/Login'
  }
]

const router = new VueRouter({
  routes
})

export default router
