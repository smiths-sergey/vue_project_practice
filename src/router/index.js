import { createRouter, createWebHashHistory } from 'vue-router';
import Products from '@/views/Products.vue';
import Basket from '@/views/Basket.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Products,
    },
    {
        path: '/basket',
        name: 'basket',
        component: Basket,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
