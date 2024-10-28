<template>
    <div>
        <h1>Propiedad Conmutada</h1>
        <button @click="getJuegosAzules()">Juegos azules</button>
        <div v-html="html"></div>
        <!-- <ul>
            <li v-for="juego in juegosRojos" :key="juego" v-html="juego"></li>
        </ul> -->
    </div>
</template>

<script>


export default {
    name: "A2PropiedadConmutada",
    methods:{
        getJuegosAzules(){
            this.html = ""
            for (var juego of this.juegos){
                this.html += "<h4 style='color:blue'>" + juego + "</h4>";
            }

        }
    },
    computed:{
        // Una propiedad conmutada siempre devuelve valores y no puede recibir parametros
        juegosRojos(){
            var datos = this.juegos;
            for (var i = 0; i < datos.length; i++){
                datos[i] = "<span style='color:red'>" + datos[i] + "</span>";
            }
            return datos;
        }
    },
    data(){
        return{
            mensaje: "Hola",
            html: "",
            juegos: ["Stardew Valley", "Genshin", "Kingdom Hearts", "Coffee Shop", "Sly 3"]
        }
    }
}
</script>

<style>
    li {
        color:aqua;
    }
</style>