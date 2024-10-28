<template>
    <div>
        <h1>Directivas</h1>
        <h1>
            {{ $data }}
        </h1>
        <form>
            <input v-model="numero" placeholder="nombre" type="text" />
        </form>
        <p v-if="isPar(numero)">Es par</p>
        <p v-else>Es impar</p>
        <p v-show="isPar(numero)">Es par</p>
        <p v-for="i in 10" :key="i">{{ i }}</p>
        <hr />
        <p v-for="vocal in array" :key="vocal">{{ vocal }}</p>
    </div>
</template>

<script>
export default {
    name: "a1DirectivasComponent",
    data() {
        return {
            numero: 0,
            nombre: "Maki",
            saludo: "Hola lunes",
            array: ["a", "a", "c", "d", "e"]
        }
    },
    methods: {
        isPar(numero) {
            return numero % 2 === 0;
        }
    }
}
</script>

<style></style>