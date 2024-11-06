<template>
  <div>
    <h2>update</h2>
    <form class="form w-50 p-3" style="margin:auto" v-on:submit.prevent="updatePersonaje()">
        <select v-model="personaje.idSerie" class="form-select m-3">
            <option v-for="s in series" :key="s" :value="s.idSerie">{{ s.nombre }}</option>
        </select>
        <select v-model="personaje.idPersonaje" class="form-select m-3">
            <option v-for="p in personajes" :key="p" :value="p.idPersonaje">{{ p.nombre }}</option>
        </select>
        <button class="btn btn-success">Create</button>
    </form>
  </div>
</template>

<script>
import ServiceSeries from '@/services/ServiceSeries';
const service = new ServiceSeries();

export default {
    name: 'UpdatePersonaje',
    data() {
        return {
            personaje: {
                idPersonaje: 0,
                nombre: "",
                imagen: "",
                idSerie: 0
            },
            series: [],
            personajes: []
        }
    },
    methods:{
        updatePersonaje(){
            service.updatePersonaje(this.personaje).then(response => {
                console.log(response);
                let route = "/personajes/" + this.personaje.idSerie;
                this.$router.push(route);
            });
        }
    },
    mounted(){
        service.getSeries().then(response => {
            this.series = response;
        });
        service.getPersonajes().then(response => {
            this.personajes = response;
        });
    }
}
</script>

<style>

</style>