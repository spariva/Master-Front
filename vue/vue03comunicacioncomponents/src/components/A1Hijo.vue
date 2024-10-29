<template>
  <div>
    <li>Prop estática: {{ estatica }} y dinámica: {{ nombredeporte }}</li>
    <button @click="seleccionarFavoritoHijo()">Favorito</button>
  </div>
</template>

<script>
export default {
    name: "A1Hijo",
    props: ["nombredeporte", "estatica"],
    methods: {
        seleccionarFavoritoHijo() {
            console.log("hijo")
            //realiza la llamada al padre con emit string ""
            //para enviar info hay que poner comas por cada parámetro que haya en la recepción
            this.$emit("seleccionarFavoritoParent", this.nombredeporte);
        }
    }
}
</script>

<style>

</style>