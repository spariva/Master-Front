import { createRouter, createWebHistory } from 'vue-router';
import A1Home from './components/A1Home.vue';
import A1Collatz from './components/A1Collatz.vue';

const routes = [
    {
        path: "/", component: A1Home
    },
    {
        path: "/collatz", component: A1Collatz
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;