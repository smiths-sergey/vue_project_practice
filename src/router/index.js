import { createRouter, createWebHashHistory } from 'vue-router';
import ProductsPage from '@/views/ProductsPage';
import BasketPage from '@/views/BasketPage';
import DescriptionPage from '@/views/DescriptionPage';
import LoginPage from '@/views/LoginPage';

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductsPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { notAuthOnly: true },
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/description/:id',
    name: 'description',
    component: DescriptionPage,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authorizedUserLogin');

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next('/login');
  } else if (
    to.matched.some((record) => record.meta.notAuthOnly) &&
    isAuthenticated
  ) {
    next('/');
  } else {
    next();
  }
});

export default router;
