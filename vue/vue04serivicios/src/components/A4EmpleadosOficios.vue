<template>
  <div>
    <h1>Hola</h1>
    <table class="table table-dark">
        <thead>
            <th>apellido</th>
            <th>oficio</th>
            <th>salario</th>
            <th>departamento</th>
        </thead>
        <tbody>
            <tr v-for="e in empleados" :key="e">
                <td>{{ e.apellido }}</td>
                <td>{{ e.oficio }}</td>
                <td>{{ e.salario }}</td>
                <td>{{ e.departamento }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
// import Global from '../Global.js';
// import axios from 'axios';
import ServiceEmpleados from '@/services/ServiceEmpleados.js';

const service = new ServiceEmpleados();

export default {
    name: "A4EmpleadosOficios",
    watch:
    {
        '$route.params.oficio'(nextVal,oldVal){
            if(nextVal != oldVal){
                this.loadEmpleados()
            }
        }
    },
    mounted(){
        this.loadEmpleados()
    },
    methods:{
        loadEmpleados(){
            let oficio = this.$route.params.oficio;

            service.getEmpleadosOficio(oficio).then(response=>{
                this.empleados = response;
            })

            // let request = "api/empleados/empleadosoficio/" + oficio;
            // let url = Global.urlApiEmpleados + request;
            // console.log(url)
            // axios.get(url).then(response=>{
            //     this.empleados = response.data;
            // })
        }
    },
    data(){
        return{
            empleados: []
        }
    }

}
</script>

<style>

</style>