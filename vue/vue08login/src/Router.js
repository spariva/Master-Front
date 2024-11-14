import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";



const routes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/login", component: LoginComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;