import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './views/auth/SignIn.vue'
import Account from './views/account/Index.vue'
import Chat from './views/Chat.vue'
import Composition from './views/Composition.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/composition',
      name: 'composition',
      component: Composition
    }
  ]
})
