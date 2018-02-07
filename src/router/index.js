import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Index.vue'
import Profile from '@/components/User/Profile.vue'

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
  ]
})
