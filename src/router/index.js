import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Index.vue'
import Profile from '@/components/User/Profile.vue'
import Register from '@/components/User/Register.vue'
import Login from '@/components/User/Login.vue'
import NotFound from '@/components/Globals/NotFound/NotFound.vue'
import Edit from '@/components/User/Edit.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile-edit/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  mode: 'history'
})
