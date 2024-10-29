<template>
  <div>
    <ul id="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/collatz">Collatz</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "A1Menu"
}
</script>

<style>
    @import "./../assets/css/estilos.css";
    ul#menu li {
        flex: 1;
        display: inline;
        font-size: 1.2em;
    }
</style>