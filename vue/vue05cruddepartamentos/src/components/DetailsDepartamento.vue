<template>
  <div>
    <h2>detalle {{ $route.params.id }}</h2>
    <ul class="list-group">
        <li class="list-item">{{ $route.params.id }}</li>
        <li class="list-item">{{ $route.params.nombre }}</li>
        <li class="list-item">{{ $route.params.localidad }}</li>
    </ul>
    </div>
</template>

<script>
export default {
    name:"DetailsDepartamento",
    data(){
        return{
            departamento:{
                idDepartamento: "",
                nombre: "",
                localidad: ""
            }
        }
    }
}
</script>

<style>

</style>