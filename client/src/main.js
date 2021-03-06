import '@babel/polyfill'
import Vue from 'vue'

import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/style.css'
require('../src/assets/fonts.googleapis.roboto.css')

Vue.config.productionTip = false

Vue.filter('formatDate', function (v) {
  if (!v) return ''
  return v.slice(0, 16).replace('T', ' ')
})

Vue.filter('getHostName', function (s) {
  if (!s) return ''
  const url = new URL(s)
  return url.hostname
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
