import { createRouter, createWebHistory } from 'vue-router'
import login from '@/components/login.vue'
import calc from '@/components/calc.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/calc/:id',
      name: 'calc',
      component: calc
    }
  ]
})

export default router
