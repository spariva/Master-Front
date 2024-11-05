<template>
    <div class="home">
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Series 🐲</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample03">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/create">Nuevo personaje</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/update">Modificar personaje</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" >
                                <li v-for="serie in series" :key="serie"><router-link class="dropdown-item" :to="'/serie/' +
                                    serie.idSerie">{{ serie.nombre }}</router-link></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>



    </div>
</template>

<script>
import ServiceSeries from '@/services/ServiceSeries';
const service = new ServiceSeries();

export default {
    name: 'MenuComponent',
    data() {
        return {
            series: []
        }
    },
    mounted() {
        service.getSeries().then(response => {
            this.series = response;
        });
    }

}
</script>

<style></style>