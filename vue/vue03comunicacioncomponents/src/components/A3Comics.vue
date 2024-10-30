<template>
    <div>
    <h2>Comics parent</h2>
    <div v-if="favorito" id="favorito">
        <A3Comic :comic="favorito"/>
    </div>
    <form v-on:submit.prevent="crearComic()">
        <input type="text" v-model="comicForm.titulo" placeholder="Titulo"/>
        <input type="text" v-model="comicForm.imagen" placeholder="Imagen"/>
        <input type="text" v-model="comicForm.descripcion" placeholder="Descripcion"/>
        <input type="number" v-model="comicForm.year" placeholder="Año"/>
        <button type="submit">Crear comic</button>
    </form>
    <div v-for="(comic, index) in comics" :key="comic" id="comics">
        <A3Comic :comic="comic" :index="index" v-on:seleccionarFavorito="seleccionarFavorito" v-on:eliminarComic="eliminarComic"/>
    </div>

  </div>
</template>

<script>
import A3Comic from './A3Comic.vue';

export default {
    name: "A3Comics",
    components: {
        A3Comic
    },
    methods: {
        crearComic(){
            this.comics.push(this.comicForm);
            this.comicForm = {
                titulo: "",
                imagen: "",
                descripcion: "",
                year: 0
            }
        },
        seleccionarFavorito(comic){
            this.favorito = comic;
        },
        eliminarComic(comic){
            this.comics.splice(comic, 1);
            //this.comics.pop(comic);
        }
    },
    data(){
        return{
            comicForm:{
                titulo: "",
                imagen: "",
                descripcion: "",
                year: 0
            },
            favorito: null,
            comics: [
                {
                titulo: "Spiderman",
                imagen:
                    "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                descripcion: "Hombre araña"
                , year: 1997
                },
                {
                titulo: "Wolverine",
                imagen:
                    "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                descripcion: "Lobezno"
                , year: 2003
                },
                {
                titulo: "Guardianes de la Galaxia",
                imagen:
                    "data:image/jpeg;base64,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",
                descripcion: "Yo soy Groot"
                , year: 2006
                },
                {
                titulo: "Avengers",
                imagen:
                    "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                descripcion: "Los Vengadores"
                , year: 1993
                },
                {
                titulo: "Spawn",
                imagen:
                    "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                descripcion: "Al Simmons"
                , year: 2000
                },
                {
                titulo: "Batman",
                imagen:
                    "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                descripcion: "Murcielago"
                , year: 2001
                }
            ]
        }
    }
}
</script>

<style>
    @import './../assets/css/estiloscomic.css';
    #favorito {
        background-color: rgb(66, 231, 176);
        width: 30%;
        margin: 0 auto;
    }
</style>