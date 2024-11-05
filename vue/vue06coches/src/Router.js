import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CreateCoche from "./components/CreateCoche.vue";
import UpdateCoche from "./components/UpdateCoche.vue";
import DetailCoche from "./components/DetailCoche.vue";
import DeleteCoche from "./components/DeleteCoche.vue";

const routes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/create", component: CreateCoche
    },
    {
        path: "/update/:id", component: UpdateCoche
    },
    {
        path: "/detail/:id", component: DetailCoche
    },
    {
        path: "/delete/:id", component: DeleteCoche
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;