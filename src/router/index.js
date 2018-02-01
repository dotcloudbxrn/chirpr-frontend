import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Feed/Index.vue'
import Profile from '@/components/Feed/Profile.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ],
  mode: 'history'
})
