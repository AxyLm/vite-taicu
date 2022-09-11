import {
  createRouter,
  createWebHistory,
  NavigationGuardWithThis,
  RouteRecordRaw,
} from 'vue-router';
import '@varlet/ui/es/snackbar/style';
import { type App } from 'vue';
import Layout from '~/layout/index.vue';

declare module 'vue-router' {
  interface RouteMeta {
    appBar?: boolean;
    tabBar?: boolean;
    batTitle?: string;
    authorization?: boolean;
  }
}

const routes: RouteRecordRaw[] = [
  {
    name: 'Layout',
    path: '/',
    component: Layout,
    redirect: 'about',
    children: [
      {
        name: 'Home',
        path: 'home',
        component: () => import('~/views/home/index.vue'),
      },
      {
        name: 'About',
        path: 'about',
        component: () => import('~/views/about/index.vue'),
      },
    ],
  },
];

const beforeEach: NavigationGuardWithThis<undefined> = (to, from, next) => {
  next();
};

export { routes };

export const install = (app: App<Element>) => {
  const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL ?? '/'),
  });
  router.beforeEach(beforeEach);

  app.use(router);
};
