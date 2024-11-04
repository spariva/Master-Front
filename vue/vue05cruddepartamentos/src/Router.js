import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from "@/components/DepartamentosComponent.vue";

const routes = [
    {
        path: "/" , component: DepartamentosComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;