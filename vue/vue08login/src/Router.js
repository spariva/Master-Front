import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";



const routes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/perfil/:id", component: PerfilComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;