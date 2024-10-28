<template>
  <div>
    <h1>Mensajito</h1>
    <p>{{ nombre }}</p>
    <img src="./../assets/images/mg_4949.jpg" alt="a" />
  </div>
</template>

<script>
export default {
  name: "a1HolaMundo",
  data() {
    return {
      msg: "Hola Mundo",
      nombre: "Maki",
      numero: 0,
      array: [1, 2, 3, 4, 5],
      objeto: {},
    };
  },
};
</script>

<style>
h1 {
  color: rgb(67, 67, 185);
}

@import "./../assets/css/estilos.css";
</style>