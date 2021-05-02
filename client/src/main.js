// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'

import store from './store'

import axios from 'axios'
import underscore from 'vue-underscore'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify);

Vue.use(underscore);

Vue.axios = Vue.prototype.$https = axios.create({
  baseURL: 'http://localhost:5000/'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  vuetify: new Vuetify({theme: {dark: true}}),  
  components: { App },
  template: '<App/>'
})
