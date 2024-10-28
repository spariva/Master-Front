import { createRouter, createWebHistory } from "vue-router";
import a1Home from "./components/a1Home.vue";
import a1Cine from "./components/a1Cine.vue";
import a1Music from "./components/a1Music.vue";
import a1CiclcoVida from "./components/a1CiclcoVida.vue";

const routes = [
    {
        path: "/", component: a1Home
    },
    {                                                                                                                                             path: "/cine", component: a1Cine
    },
    {
        path: "/music", component: a1Music
    },
    {
        path: "/vida", component: a1CiclcoVida
    }
]

//* Creamos const router que utilizaremos en main.js con el createRouter, y el createWebHistory y el array de Routes
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;