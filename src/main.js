// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import store from './store/store'
import 'vuetify/dist/vuetify.min.css'

import Panel from '@/components/Globals/Panel/Panel.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('panel', Panel)

export const eventBus = new Vue({})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
