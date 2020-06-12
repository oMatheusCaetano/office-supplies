import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import App from './App.vue'
import store from './store'
import 'bootstrap'

require('animate.css')

Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
