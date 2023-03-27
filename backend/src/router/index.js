import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
];


const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;