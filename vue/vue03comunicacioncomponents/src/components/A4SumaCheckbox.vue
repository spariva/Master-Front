<template>
    <div>
        <h2>Suma Checkbox</h2>
        <button @click="generarCheckbox()">Generar Checkbox</button>
        <div v-for="num in numeros" :key="num">
            <input type="checkbox" :name="num" :value="num" v-model="numerosSeleccionados" @change="sumar()">
            <label>{{ num }}</label><br>
        </div>
        <p v-if="numerosSeleccionados.length>0">La suma seleccionada es {{ resultado }} y los números checkeados {{ numerosSeleccionados }}</p>
    </div>
</template>

<script>
export default {
    name: 'A4SumaCheckbox',
    data() {
        return {
            resultado: 0,
            numeros: [5, 3],
            numerosSeleccionados: []
        }
    },
    methods: {
        sumar() {
            this.resultado = 0;
            for (let i = 0; i < this.numerosSeleccionados.length; i++) {
                this.resultado += parseInt(this.numerosSeleccionados[i]);
            }
        },
        generarCheckbox() {
            this.numeros.push(Math.floor(Math.random() * 100));
        }
    }
}
</script>

<style>
@import './../assets/css/estiloscomic.css';

div {
    padding: 10px;
}

input[type="checkbox"] {
    margin-right: 10px;
}
</style>