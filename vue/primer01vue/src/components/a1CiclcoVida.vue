<template>
    <div>
        <h1>Ciclo de Vida</h1>
        <p>Es {{ saludo }} es un componente de Vue {{ numero }}</p>
        <button @click="incrementar">Incrementar</button>
        <button @click="decrementar">Decrementar</button>
        <button @click="cambiarSaludo">Cambiar Saludo</button>
    </div>
</template>

<script>
export default {
    name: "a1CicloVida",
    mounted() {
        console.log("El componente ha sido montado");
    },
    created() {
        console.log("El componente ha sido creado");
    },
    updated() {
        console.log("El componente ha sido actualizado");
    },
    unmounted() {
        console.log("El componente ha sido desmontado");
    },
    data() {
        return {
            msg: "Hola Mundo",
            nombre: "Maki",
            saludo: "Hola lunes",
            numero: 0,
            array: [1, 2, 3, 4, 5],
            objeto: {},
        };
    },
    methods: {
        incrementar() {
            this.numero++;
        },
        decrementar() {
            this.numero--;
        },
        cambiarSaludo() {
            this.saludo = "Hola martes";
        },
    },
}
</script>

<style>
    h1 {
        color:rgb(46, 231, 145);
    }
    button {
        background-color: rgb(46, 231, 145);
        color: rgb(25, 29, 31);
        padding: 10px;
        margin: 10px;
        border: none;
        border-radius: 5px;
    }
    @import "./../assets/css/estilos.css";
</style>