import { createRouter, createWebHistory } from 'vue-router'

const defaultLayout = {
  header: () => import('@/widgets/header/index.ts')
}


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('../../../pages/compare'),
        ...defaultLayout,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      components: {
        default: () => import('@/pages/404'),
        ...defaultLayout,
      },
    },
  ],
})

export default router
