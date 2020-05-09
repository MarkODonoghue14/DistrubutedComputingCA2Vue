
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Login'
import HomePage from '../components/HomePage'

const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      component: HomePage,
      name: 'home',
      path: '/home'
    }
  ];

export default new VueRouter({routes})