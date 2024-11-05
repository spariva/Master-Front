import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import SerieDetalle from "./components/SerieDetalle.vue";
import PersonajesSerie from "./components/PersonajesSerie.vue";
import CreatePersonaje from "./components/CreatePersonaje.vue";


const routes = [
    {
        path: "/", component: HelloWorld
    },
    {
        path: "/serie/:id", component: SerieDetalle
    },
    {
        path: "/personajes/:id", component: PersonajesSerie
    },
    {
        path: "/create", component: CreatePersonaje
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;