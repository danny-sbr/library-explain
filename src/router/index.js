import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/scan',
      name: 'scan',
      component: () => import('../views/OnScanView/OnScanView.vue'),
    },
    {
      path: '/image-capture',
      name: 'image-capture',
      component: () => import('../views/Html2CanvasView/Html2CanvasView.vue'),
    },
    {
      path: '/full-calendar',
      name: 'full-calendar',
      component: () => import('../views/FullCalendarView/FullCalendarView.vue'),
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: () => import('../views/QRcodeView/QRcodeView.vue'),
    },
  ],
})

export default router
