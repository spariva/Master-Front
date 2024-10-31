<template>
  <div>
    <h1>Coches</h1>
    <div v-for="car in coches" :key="car">
        <h2>{{ car.marca }} {{ car.modelo }}</h2>
        <p>{{ car.conductor }}</p>
        <img :src="car.imagen" style="width:250px; height: auto;"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
//let urlApiCoches = "https://apicochespaco.azurewebsites.net/";

export default {
    name: "A1Coches",
    data(){
        return{
            coches: []
        }
    },
    mounted(){
        let request = "webresources/coches";
        console.log(this.$url.urlApiCoches);
        let url = this.$url.urlApiCoches + request;

        axios.get(url).then(response =>{
            this.coches = response.data;
        })
    }
}
</script>

<style>

</style>