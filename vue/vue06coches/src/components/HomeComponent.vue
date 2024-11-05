<template>
  <div>
    <h1>home coches</h1>
    <table class="table table-hover table-striped w-75" style="margin: 0 auto">
      <thead>
        <tr>
          <th>Id</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Conductor</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in coches" :key="c">
          <td>{{ c.idCoche }}</td>
          <td>{{ c.marca }}</td>
          <td>{{ c.modelo }}</td>
          <td>{{ c.conductor }}</td>
          <td><img :src="c.imagen"></td>
          <td>
            <router-link :to="'/update/' + c.idCoche" class="btn btn-dark m-2">Update</router-link>
            <router-link :to="'/detail/' + c.idCoche" class="btn btn-dark m-2">Detalle</router-link>
            <router-link :to="'/delete/' + c.idCoche" class="btn btn-warning m-2">Eliminar</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServicesCoches from '@/services/ServiceCoches';
const service = new ServicesCoches();
export default {
    name: "HomeComponent",
    data(){
      return{
        coches: []
      }
    },
    mounted(){
      service.getCochesFetch().then(result=>{
        this.coches = result;
      })
    }
}
</script>

<style>
img{
  width: 250px;
  height: 200px;
}
</style>