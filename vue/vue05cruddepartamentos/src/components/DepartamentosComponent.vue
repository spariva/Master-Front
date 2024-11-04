<template>
    <div>
        <h2>Dep</h2>
        <img v-if="!status" src="../assets/images/descarga.png" />
        <table class="table table-hover table-bordered table-striped table-group-divider mt-5">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dep in departamentos" :key="dep">
                    <td>{{ dep.idDepartamento }}</td>
                    <td>{{ dep.nombre }}</td>
                    <td>{{ dep.localidad }}</td>
                    <td>
                        <router-link :to="'/details/'+ dep.idDepartamento + '/' + dep.nombre + '/' + dep.localidad" class="btn btn-outline-dark">Details</router-link>
                        <router-link :to="'/update/' + dep.idDepartamento" class="btn btn-outline-dark">Update</router-link>
                        <router-link :to="'/delete/'+ dep.idDepartamento" class="btn btn-outline-dark">Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServicesDepartamentos from '@/services/ServicesDepartamentos';
const service = new ServicesDepartamentos();

export default {
    name: "DepartamentosComponent",
    data() {
        return {
            departamentos: [],
            status: false
        }
    },
    mounted() {
        service.getDepartamentos().then(response => {
            this.status = true;
            this.departamentos = response;
        })
    }
}
</script>

<style>
</style>