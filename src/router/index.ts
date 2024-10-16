import { createRouter, createWebHistory } from 'vue-router'
import GameScreen from '@/components/GameScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'game',
      component: GameScreen
    }
  ]
})

export default router