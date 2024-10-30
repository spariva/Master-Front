<template>
  <div>
    <A5Menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import A5Menu from './components/A5Menu.vue';

// import A4SumaCheckbox from './components/A4SumaCheckbox.vue';

// import A3Comics from './components/A3Comics.vue';
//import A4SeleccionMultiple from './components/A4SeleccionMultiple.vue';
//import A1Padre from './components/A1Padre.vue';
//import A2Padre from './components/A2Padre.vue';


export default {
  name: 'App',
  components: {
    A5Menu
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
