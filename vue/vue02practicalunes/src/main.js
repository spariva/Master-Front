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
    },
    getTablaMultiplicar(num, i){
        let html = "";
            html += "<td>" + num + " x " + i + "</td>";
            html += "<td>" + num * i + "</td>";
        return html;
    },
    getMultiplicacion(num, i){
        let html = "";
        html +=  (num * i);
        return html;
    },
    getOperacion(num, i){
        let html = "";
        html +=  num + " x " + i;
        return html;
    }
}

app.use(Router).mount('#app')
