<template>
    <div class="d-flex justify-content-center">
        <form class="d-flex justify-content-around align-items-center w-50 bg-primary-subtle" v-on:submit.prevent="crearDepartamento()">
            <input type="text" v-model="departamento.idDepartamento" placeholder="id" class="form-control w-25" />
            <input type="text" v-model="departamento.nombre" placeholder="nombre" class="form-control w-25" />
            <input type="text" v-model="departamento.localidad" placeholder="localidad" class="form-control w-25" />
            <br />
            <button class="btn btn-outline-dark m-3">Crear</button>
        </form>
    </div>
</template>

<script>
import ServicesDepartamentos from '@/services/ServicesDepartamentos';
const service = new ServicesDepartamentos();

export default {
    name: "CreateDepartamento",
    data() {
        return {
            departamento: {
                idDepartamento: "",
                nombre: "",
                localidad: ""
            }

        }
    },
    methods:{
        crearDepartamento(){
            service.createDepartamento(this.departamento).then(response=>{
                console.log(response);
                this.$router.push("/");
            })
        }
    }

}
</script>

<style></style>