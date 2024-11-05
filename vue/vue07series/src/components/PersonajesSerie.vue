<template>
  <div>
    <h2>Personajes</h2>
    <router-link class="btn btn-warning" :to="'/serie/' + $route.params.id">Volver</router-link>
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th>Personaje</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in personajes" :key="p">
          <td>{{ p.nombre }}</td>
          <td><img :src="p.imagen" style="width:250px; height:250px"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceSeries from '@/services/ServiceSeries';
const service = new ServiceSeries();

export default {
  name: "PersonajesSerie",
  data() {
    return {
      personajes: []
    }
  },
  mounted() {
    service.getPersonajesSerie(this.$route.params.id).then(response => {
      this.personajes = response;
    });
  },
  watch: {
    '$route.params.id': function (nextVal, oldVal) {
      if (nextVal != oldVal) {
        service.getPersonajesSerie(this.$route.params.id).then(response => {
          this.personajes = response;
        });
      }
    }
  }
}
</script>

<style></style>