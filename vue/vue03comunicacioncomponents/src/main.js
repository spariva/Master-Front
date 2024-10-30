import { createApp } from 'vue'
import App from './App.vue'
import Router from './Router';

var app = createApp(App);

app.use(Router).mount('#app');
