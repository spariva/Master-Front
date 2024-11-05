<template>
    <div>
        <h1>Detalle de la serie {{ $route.params.id }}</h1>
        <div v-if="(serie.nombre != '')" class="container-fluid mt-3">
            <hr class='border border-primary opacity-100' />
            <div class='card'>
                <img class='card-img-top' :src="serie.imagen" :alt="serie.nombre" />
                <div class='card-body'>
                    <h5 class='card-title'></h5>
                    <p class='card-text'>"IMBD": {{ serie.puntuacion }}</p>
                    <router-link class='btn btn-primary w-100' :to="'/personajes/'+ serie.idSerie">Personajes
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceSeries from '@/services/ServiceSeries';
const service = new ServiceSeries();

export default {
    name: 'SerieDetalle',
    data() {
        return {
            serie: {
                idSerie: 0,
                nombre: "",
                imagen: "",
                puntuacion: 0,
                anyo: 0
            }
        }
    },
    mounted() {
        service.getSerie(this.$route.params.id).then(response => {
            this.serie = response;
        });
    },
    watch: {
        '$route.params.id': function (nextVal, oldVal) {
            if (nextVal != oldVal) {
                service.getSerie(this.$route.params.id).then(response => {
                    this.serie = response;
                });
            }
        }
    }
}
</script>

<style></style>