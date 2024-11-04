import { createApp } from 'vue'
import App from './App.vue'
import router from './Router';

var app = createApp(App);

app.config.globalProperties.$url = {
    urlApiCoches: "https://apicochespaco.azurewebsites.net/"
}

app.use(router).mount('#app')
