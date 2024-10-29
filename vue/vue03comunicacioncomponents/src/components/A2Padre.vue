<template>
  <div>
    <p>parent {{ resultado }}</p>
    <button @click="crearNumero()">Crear nuevo</button>
    <ul v-for="num in numeros" :key="num">
        <A2Hijo :numero="num" v-on:sumarPadre="sumarPadre"/>
    </ul>
  </div>
</template>

<script>
import A2Hijo from './A2Hijo.vue';

export default {
    name: "A2Padre",
    components:{
        A2Hijo
    },
    methods: {
        sumarPadre(numero){
            this.resultado += numero
        },
        crearNumero(){
            let num = parseInt(Math.random() * 100);
            this.numeros.push(num);
        }
    },
    data(){
        return{
            numeros: [2,4,5],
            resultado: 0
        }
    }
}
</script>

<style>

</style>