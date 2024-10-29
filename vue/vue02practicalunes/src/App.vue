<template>
  <div>
    <h1>Practicalunes</h1>
    <A1Menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import A1Menu from './components/A1Menu.vue';

export default {
  name: 'App',
  components: {
    A1Menu
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
