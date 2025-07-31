import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('@/pages/home'),
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      components: {
        default: () => import('@/pages/404'),
      },
    },
  ],
})

export default router
