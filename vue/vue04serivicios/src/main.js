import { createApp } from 'vue'
import App from './App.vue'

var app = createApp(App);

app.config.globalProperties.$url = {
    urlApiCoches: "https://apicochespaco.azurewebsites.net/"
}

app.mount('#app')
