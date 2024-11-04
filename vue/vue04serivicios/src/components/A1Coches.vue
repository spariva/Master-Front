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
import ServiceCoches from '@/services/ServiceCoches';
// import axios from 'axios';
//let urlApiCoches = "https://apicochespaco.azurewebsites.net/";
const service = new ServiceCoches();

export default {
    name: "A1Coches",
    data(){
        return{
            coches: []
        }
    },
    mounted(){
        service.getCoches.then(response=>{
            this.coches = response;
        })
    //     let request = "webresources/coches";
    //     let url = this.$url.urlApiCoches + request;

    //     axios.get(url).then(response =>{
    //         this.coches = response.data;
    //     })
    }
}
</script>

<style>

</style>