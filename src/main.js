import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import { PullRefresh } from 'vant'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/css/demo.css'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(PullRefresh);
Vue.use(VueAxios,axios)
axios.defaults.baseURL='/api'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
