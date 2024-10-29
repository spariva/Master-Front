<template>
  <div>
    <h2>Parent</h2>
    <h3 v-if="favorito">Fav: {{ favorito }}</h3>
    <ul v-for="sport in deportes" :key="sport">
        <A1Hijo :nombredeporte="sport" estatica="no cambia" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
    </ul>
  </div>
</template>

<script>
import A1Hijo from './A1Hijo.vue';

export default {
    name: "A1Padre",
    components: {
        A1Hijo
    },
    methods: {
        seleccionarFavoritoParent(deporteFavorito){
            console.log("soy tu padre")
            this.favorito = deporteFavorito
        }
    },
    data(){
        return{
            deportes: ["baloncesto", "ajedrez", "atletismo", "esgrima"],
            favorito: null
        }
    }
}
</script>

<style>

</style>