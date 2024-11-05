<template>
  <div class="d-flex justify-content-center">
        <form class="d-flex justify-content-around align-items-center w-50 bg-primary-subtle gap-3 p-5" v-on:submit.prevent="crearCoche()">
            <input type="text" v-model="coche.idCoche" placeholder="id" class="form-control w-25" />
            <input type="text" v-model="coche.modelo" placeholder="modelo" class="form-control w-25" />
            <input type="text" v-model="coche.marca" placeholder="marca" class="form-control w-25" />
            <input type="text" v-model="coche.conductor" placeholder="conductor" class="form-control w-25" />
            <input type="text" v-model="coche.imagen" placeholder="img" class="form-control w-25" />
            <br />
            <button class="btn btn-outline-dark m-3">Crear</button>
        </form>
    </div>
</template>

<script>
import ServicesCoches from '@/services/ServiceCoches';
const service = new ServicesCoches();

export default {
    name: "CreateCoche",
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
        crearCoche(){
            service.createCoche(this.coche).then(result=>{
                console.log(result);
                this.$router.push('/');
            });
        }
    }
}
</script>

<style>

</style>