import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('@/views/CharactersView.vue')
    },
    {
      path: '/items',
      name: 'items',
      component: () => import('@/views/ItemsView.vue')
    },
    {
      path: '/ranks',
      name: 'ranks',
      component: () => import('@/views/RanksView.vue')
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('@/views/LeaderboardsView.vue')
    }
  ]
})

export default router
