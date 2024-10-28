import { createRouter, createWebHistory } from "vue-router";
import a1Home from "./components/a1Home.vue";
import a1Cine from "./components/a1Cine.vue";
import a1Music from "./components/a1Music.vue";
import a1CiclcoVida from "./components/a1CiclcoVida.vue";
import a1DirectivasComponent from "./components/a1DirectivasComponent.vue";
import A2PropiedadConmutada from "./components/A2PropiedadConmutada.vue";
import A3ResumenDirectivasConmutadaMethod from "./components/A3ResumenDirectivasConmutadaMethod.vue";
import A4MetodosFilters from "./components/A4MetodosFilters.vue";

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
    },
    {
        path: "/directivas", component: a1DirectivasComponent
    },
    {
        path: "/conmutada", component: A2PropiedadConmutada
    },
    {
        path: "/resumen", component: A3ResumenDirectivasConmutadaMethod
    },
    {
        path: "/filters", component: A4MetodosFilters
    }
]

//* Creamos const router que utilizaremos en main.js con el createRouter, y el createWebHistory y el array de Routes
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;