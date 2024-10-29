<template>
  <div>
    <p style="color:blue">hijo {{ numero }}</p>
    <button @click="sumar()">Sumar {{ numero }}</button>
  </div>
</template>

<script>
export default {
    name: "A2Hijo",
    props: ["numero"],
    methods: {
        sumar(){
            this.$emit("sumarPadre", this.numero);
        }
    }
}
</script>

<style>

</style>