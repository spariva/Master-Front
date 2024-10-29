import { createApp } from 'vue'
import App from './App.vue'
import Router from './Router'

var app = createApp(App);

app.config.globalProperties.$filters = {
    isPar(num) {
        if (num % 2 == 0) {
            return "<li style='color:green'>" + num + "</li>";
        } else {
            return "<li style='color:red'>" + num + "</li>";
        }
    }
}

app.use(Router).mount('#app')
