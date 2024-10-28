import { createApp } from 'vue'
import App from './App.vue'
import Router from './Router'

//* separar el app por limpieza visual, y el config global para crear métodos globales. El useRouter antes del mount app.
var app = createApp(App);
app.config.globalProperties.$filters = {
    mayuscula(dato){
        return dato.toUpperCase();
    },
    getNumeroDoble(num){
        return num * 2;
    }
}
app.use(Router).mount('#app')
