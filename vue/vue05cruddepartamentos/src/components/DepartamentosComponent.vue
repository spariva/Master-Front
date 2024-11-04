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
                </tr>
            </thead>
            <tbody>
                <tr v-for="dep in departamentos" :key="dep">
                    <td>{{ dep.idDepartamento }}</td>
                    <td>{{ dep.nombre }}</td>
                    <td>{{ dep.localidad }}</td>
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