<template>
  <div>
    <h1>Estático</h1>
    <a1MenuComponentVue/>
    <router-view></router-view>
  </div>
</template>

<script>
import a1MenuComponentVue from './components/a1MenuComponent.vue'
// import a1HolaMundo from './components/a1HolaMundo.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import a1Music from './components/a1Music.vue'
// import a1Cine from './components/a1Cine.vue'
// import a1Home from './components/a1Home.vue'

export default {
  name: 'App',
  components: {
    a1MenuComponentVue
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
