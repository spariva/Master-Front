import { createRouter, createWebHistory } from "vue-router";
import A4Menu from "./components/A4Menu.vue";
import A2Customers from "./components/A2Customers.vue";
import A4EmpleadosOficios from "./components/A4EmpleadosOficios.vue";
import A5Home from "./components/A5Home.vue";
import A1Coches from "./components/A1Coches.vue";
import A3EmpleadosDetalle from "./components/A3EmpleadosDetalle.vue";

const routes = [
    {
        path: "/", component: A5Home
    },
    {
        path: "/detalle", component: A4Menu
    },
    {
        path: "/customers", component: A2Customers
    },
    {
        path: "/oficiosdetalle/:oficio", component: A4EmpleadosOficios
    },
    {
        path: "/coches", component: A1Coches
    },
    {
        path: "/empleadosdetalle", component: A3EmpleadosDetalle
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;