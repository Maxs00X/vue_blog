import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './assets/css/global.css'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://localhost:8888'
Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(global)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
