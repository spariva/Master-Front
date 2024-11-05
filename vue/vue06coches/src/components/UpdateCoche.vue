<template>
  <div class="d-flex justify-content-center">
        <form class="d-flex justify-content-around align-items-center w-50 bg-success-subtle gap-3 p-5" v-on:submit.prevent="updateCoche()">
            <input type="text" v-model="coche.idCoche" placeholder="id" class="form-control w-25" />
            <input type="text" v-model="coche.modelo" placeholder="modelo" class="form-control w-25" />
            <input type="text" v-model="coche.marca" placeholder="marca" class="form-control w-25" />
            <input type="text" v-model="coche.conductor" placeholder="conductor" class="form-control w-25" />
            <input type="text" v-model="coche.imagen" placeholder="img" class="form-control w-25" />
            <br />
            <button class="btn btn-outline-dark m-3">Update</button>
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
        updateCoche(){
            service.updateCoche(this.coche).then(result=>{
                console.log(result);
                this.$router.push('/');
            });
        },
        findCoche(){
            service.findCoche(this.$route.params.id).then(result=>{
                this.coche = result;
            });
        }
    },
    mounted(){
        this.findCoche();
    }
}
</script>

<style>

</style>