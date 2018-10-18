import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import FastClick from 'fastclick'
import '@/common/js/lib-flexble'
import '@/common/css/index.scss'

Vue.config.productionTip = false
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
