import { createRouter, createWebHistory } from 'vue-router'


import Main from '../components/Main.vue'
import Dashboard from '../components/Dashboard.vue'
import Settings from '../components/Settings.vue'

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: '/dashboard',
      children: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
          },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
          },
      ]
    },
  ]
})

export default router
