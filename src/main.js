import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

//import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
/*
axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
