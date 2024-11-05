<template>
  <div>
    <div class="card w-25" style="margin: auto">
      <img :src="coche.imagen" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ coche.modelo }}</h5>
        <p class="card-text">Marca: {{ coche.marca }}</p>
        <p class="card-text">Conductor: {{ coche.conductor }}</p>
        <router-link :to="'/update/' + coche.idCoche" class="btn btn-dark m-2">Update</router-link>
        <router-link :to="'/delete/' + coche.idCoche" class="btn btn-warning m-2">Eliminar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ServicesCoches from '@/services/ServiceCoches';
const service = new ServicesCoches();
export default {
    name: "DetailCoche",
    data(){
        return{
            coche: {
                idCoche: 0,
                modelo: "",
                marca: "",
                conductor: "",
                imagen: ""
            }
        }
    },
    methods:{
        findCoche(){
            service.findCoche(this.$route.params.id).then(result=>{
                this.coche = result;
            });
        }
    },
    mounted(){
        this.findCoche();
    },
    watch: {
        '$route.params.id': function(nextVal, oldVal){
            if(nextVal != oldVal){
                this.findCoche();
            }
        }
    }
}
</script>

<style>

</style>