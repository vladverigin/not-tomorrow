import { RouteRecordRaw } from 'vue-router';
import authGuard from 'src/router/auth-guard';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    meta: {
      requiresAuth:true
    },
    beforeEnter:authGuard
  },
  {
    path: '/reports',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ReportsPage.vue') }],
    meta: {
      requiresAuth:true
    },
    beforeEnter:authGuard
  },
  {
    path: '/auth',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {
        name:'login',
        path: 'login',
        component: () => import('pages/LoginPage.vue'),

      }
    ],
    meta: {
      requiresAuth:false
    },
    beforeEnter:authGuard
  },
  {
    path: '/welcome',
    component: () => import('layouts/LandingLayout.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
