<template>
  <div>
    <input type="number" v-model="numero" />
    <h2>Método</h2>
    <button @click="multiplicar()">Calcular</button>
    <h2>Tabla de multiplicar del {{ numero }}</h2>
    <table>
        <thead>
            <tr>
                <th>Operación</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody v-html="html">
        </tbody>
    </table>
    <hr />
    <h2>Directivas</h2>
    <table>
        <thead>
            <tr>
                <th>Operación</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in 10" :key="i">
                <td>{{ numero }} x {{ i }}</td>
                <td>{{ numero * i }}</td>
            </tr>
        </tbody>
    </table>
    <hr />
    <h2>Filters</h2>
    <table>
        <thead>
            <tr>
                <th>Operación</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr v-for="n in 10" :key="n" v-html="$filters.getTablaMultiplicar(numero, n)">
            </tr> -->
            <tr v-for="n in 10" :key="n">
                <td>{{ $filters.getOperacion(numero, n) }}</td>
                <td>{{ $filters.getMultiplicacion(numero, n) }}</td>
            </tr>
        </tbody>
    </table>
    <hr />
  </div>
</template>

<script>
export default {
    name: "A2TablaMultiplicar",
    data() {
        return {
            numero: 0,
            html: ""
        };
    },
    methods: {
        multiplicar() {
            this.html = ""
            let aux = ""
            for (let i = 1; i <= 10; i++) {
                aux += "<tr><td>" + this.numero  + " x " +  i + "</td>";
                aux += "<td>" + this.numero * i + "</td></tr>";
            }
            this.html = aux;
        }
    }

}
</script>

<style>
    h2 {
        color: rgb(175, 75, 175);
    }

    table {
        border-collapse: collapse;
        width: 80%;
        margin: 0 auto;
    }

    th {
        background-color: rgb(111, 70, 177);
        color: white;
    }

    td {
        border: 1px solid rgb(175, 75, 175);
        text-align: center;
    }

    tr:nth-child(even) {
        background-color: rgb(138, 48, 138);
        color: white;
    }

    tr:nth-child(odd) {
        background-color: rgb(175, 75, 175);
        color: white;
    }
</style>