import { createRouter, createWebHistory } from 'vue-router';
import A1Home from './components/A1Home.vue';
import A1Collatz from './components/A1Collatz.vue';
import A1CollatzPaco from './components/A1CollatzPaco.vue';
import A2TablaMultiplicar from './components/A2TablaMultiplicar.vue';

const routes = [
    {
        path: "/", component: A1Home
    },
    {
        path: "/collatz", component: A1Collatz
    },
    {
        path: "/collatzPaco", component: A1CollatzPaco
    },
    {
        path: "/multiplicar", component: A2TablaMultiplicar
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;