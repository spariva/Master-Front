<template>
    <div >
        <h2>{{ comic.titulo }}</h2>
        <p>{{ comic.descripcion }} <button @click="seleccionarFavorito()">Fav</button><button @click="eliminarComic()">Delete</button></p>
        <p :class="{
            rojo: comic.year <= 2000,
            verde: comic.year >= 2000
        }">{{ comic.year }}</p>
        <img :src="comic.imagen"/>
    </div>
</template>

<script>
export default {
    name: "A3Comic",
    props: ["comic", "index"],
    methods: {
        seleccionarFavorito() {
            this.$emit("seleccionarFavorito", this.comic);
        },
        eliminarComic() {   
            this.$emit("eliminarComic", this.index);
        }
    }
}
</script>

<style>
    @import './../assets/css/estiloscomic.css';
    div {
        padding: 10px;
    }
</style>