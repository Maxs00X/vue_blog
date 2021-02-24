import Vue from 'vue'
import VueRouter from 'vue-router'
import signup from '../views/signup'
import Main from '../views/Main'
import Content from '../views/Content'

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
  },
{
    path: "/Content/:cid",
    name: 'content',
    component: Content
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
