<template>
    <div>
        <h1>Detalle de Empleados</h1>
        <form v-on:submit.prevent="verDetalles()">
            <label>Seleccione empleado</label>
            <select class="form-control" v-model="id">
                <option v-for="empleado in empleados" :key="empleado" :value="empleado.idEmpleado">
                    {{ empleado.apellido }}
                </option>
            </select>
            <button class="btn btn-info">
                detalles
            </button>
        </form>
        <table v-if="empleado" class="table table-dark table-hover table-striped">
            <thead>
                <th>Oficio</th>
            </thead>
            <tbody>
                <tr>
                    <td>{{ empleado.oficio }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceEmpleados from '@/services/ServiceEmpleados.js';
// import Global from '../Global.js';
// import axios from 'axios';

const service = new ServiceEmpleados();

export default {
    name: "A3EmpleadosDetalle",
    data() {
        return {
            empleados: [],
            id: 0,
            empleado: null
        }
    },
    methods: {
        verDetalles() {
            service.findEmpleados(this.id).then(response => {
                this.empleado = response;
            })
            //     let request = "api/empleados/";
            //     let url = Global.urlApiEmpleados + request + this.id;
            //     console.log(url)

            //     axios.get(url).then(response=>{
            //     this.empleado = response.data;
            // })
        }
    },
    mounted() {
        service.getEmpleados().then(response => {
            this.empleados = response;
        })

        // let request = "api/empleados";
        // let url = Global.urlApiEmpleados + request;

        // axios.get(url).then(response=>{
        //     this.empleados = response.data;
        // })
    },
}
</script>

<style></style>