<template>
  <div>
    <A4Menu />
    <router-view></router-view>
  </div>
</template>

<script>
//import A1Coches from './components/A1Coches.vue';
//import A2Customers from './components/A2Customers.vue';
//import A3EmpleadosDetalle from './components/A3EmpleadosDetalle.vue';
import A4Menu from './components/A4Menu.vue';



export default {
  name: 'App',
  components: {
    A4Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
