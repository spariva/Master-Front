<template>
    <div>
        <div class="d-flex justify-content-center">
            <form class="d-flex justify-content-around align-items-center w-50 bg-warning-subtle"
                v-on:submit.prevent="modificarDepartamento()">
                <input type="hidden" v-model="departamento.idDepartamento" placeholder="id" class="form-control w-25" />
                <input type="text" v-model="departamento.nombre" placeholder="nombre" class="form-control w-25" />
                <input type="text" v-model="departamento.localidad" placeholder="localidad" class="form-control w-25" />
                <br />
                <button class="btn btn-outline-dark m-3">Crear</button>
            </form>
        </div>
    </div>
</template>

<script>
import ServicesDepartamentos from '@/services/ServicesDepartamentos';
const service = new ServicesDepartamentos();

export default {
    name: "UpdateDepartamento",
    data() {
        return {
            departamento: {
                idDepartamento: "",
                nombre: "",
                localidad: ""
            }
        }
    },
    mounted() {
        let id = this.$route.params.id;
        service.findDepartamento(id).then(response => {
            this.departamento = response;
        })
    },
    methods: {
        modificarDepartamento() {
            let id = this.$route.params.id;
            service.modifyDepartamento(id).then(response => {
                console.log(response);
            })
        }
    }
}
</script>

<style></style>