// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store/store'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import config from './config'
let ENV = process.env.NODE_ENV || 'development'

Vue.use(Vuetify, VueSocketIO)
Vue.config.productionTip = false
Vue.component('panel', Panel)

import Panel from '@/components/Globals/Panel/Panel.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
