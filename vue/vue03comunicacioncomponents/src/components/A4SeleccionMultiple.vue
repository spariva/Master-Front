<template>
    <div>
        <h2>Selecciona una opción</h2>
        <div>Selected: {{ selected }}</div>

        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <hr />
        <h2>Selecciona Múltiple {{ seleccion }}</h2>
        <select v-model="seleccion" @change="cambiarSeleccion" multiple>
            <option v-for="opcion in opciones" :value="opcion.value" :key="opcion">{{ opcion.text }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'A4SeleccionMultiple',
    data() {
        return {
            seleccion: '',
            selected: '',
            opciones: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]
        }
    },
    methods: {
        cambiarSeleccion() {
            console.log(this.seleccion);
        }
    }
}
</script>

<style>
@import './../assets/css/estiloscomic.css';
</style>