<template>
    <div>
        <h1>Métodos filters</h1>
        <ul>
            <li v-for="num in numeros" :key="num">Número: {{ num }} / Doble: {{ $filters.getNumeroDoble(num) }}</li>
        </ul>
        <ul>
            <li v-for="name in nombres" :key="name">Nombre: {{ name }} / Mayus: {{ $filters.mayuscula(name) }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "A4MetodosFilters",
    data() {
        return {
            numeros: [4, 5, 2, 5, 34, 1],
            nombres: ["Baal", "Nosferatu", "Kaos", "Aphelios"]
        }
    }
}
</script>

<style>
    ul{
        background-color: mediumaquamarine;
    }
</style>