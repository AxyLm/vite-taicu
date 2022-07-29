import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import About from '~/views/About/Index.vue';
const routes: RouteRecordRaw[] = [
  {
    name: 'Layout',
    path: '/',
    component: () => import('../layout/Index.vue'),
    redirect: 'home',
    children: [
      {
        name: 'Home',
        path: 'home',
        component: () => import('~/views/Home/Index.vue'),
      },
      {
        name: 'About',
        path: 'about',
        component: About,
      },
    ],
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  next();
});

export { router };
