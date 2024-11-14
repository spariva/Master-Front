import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LoginComponent from "./components/LoginComponent.vue";



const routes = [
    {
        path: "/", component: HelloWorld
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