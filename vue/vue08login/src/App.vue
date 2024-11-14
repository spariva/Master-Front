<template>
  <div>
    <menu-component></menu-component>
    <router-outlet></router-outlet>
  </div>
</template>

<script>
import MenuComponent from '../../vue05cruddepartamentos/src/components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    MenuComponent
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
  margin-top: 60px;
}
</style>
