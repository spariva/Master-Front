<template>
  <div><h2>Create</h2>
    <form class="form w-50 p-3" style="margin:auto" v-on:submit.prevent="createPersonaje()">
        <input type="text" v-model="personaje.nombre" placeholder="Nombre" class="form-control m-3" />
        <input type="text" v-model="personaje.imagen" placeholder="imagen" class="form-control m-3" />
        <input type="hidden" v-model="personaje.idSerie" placeholder="idSerie" class="form-control m-3" value="0"/>
        <select v-model="personaje.idSerie" class="form-select m-3">
            <option v-for="s in series" :key="s" :value="s.idSerie">{{ s.nombre }}</option>
        </select>
        <button class="btn btn-success">Create</button>
    </form>
  </div>
</template>

<script>
import ServiceSeries from '@/services/ServiceSeries';
const service = new ServiceSeries();

export default {
    name: 'CreatePersonaje',
    data() {
        return {
            personaje: {
                idPersonaje: 0,
                nombre: "",
                imagen: "",
                idSerie: 0
            },
            series: []
        }
    },
    methods:{
        createPersonaje(){
            service.createPersonaje(this.personaje).then(response => {
                this.personaje = response;
            });
        }
    },
    mounted(){
        service.getSeries().then(response => {
            this.series = response;
        });
    }
}
</script>

<style>

</style>