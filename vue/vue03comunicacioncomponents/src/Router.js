import { createRouter, createWebHistory } from "vue-router";
import A5Home from "./components/A5Home.vue";
import A3Comics from "./components/A3Comics.vue";
import A4SumaCheckbox from "./components/A4SumaCheckbox.vue";
import A5NumeroDoble from "./components/A5NumeroDoble.vue";
import A6TablaMultiplicar from "./components/A6TablaMultiplicar.vue";


const routes = [
    {
        path: "/", component: A5Home
    },
    {
        path: "/comics", component: A3Comics
    },
    {
        path: "/checkboxes", component: A4SumaCheckbox
    },
    {
        path: "/numerodoble/:num?", component: A5NumeroDoble
    },
    {
        path: "/tabla/:num?", component: A6TablaMultiplicar
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;