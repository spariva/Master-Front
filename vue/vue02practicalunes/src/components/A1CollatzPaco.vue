<template>
    <div>
        <input type="number" v-model="numero" />
        <button @click="colatzMethod()">Calcular</button>
        <hr />
        <div v-if="arrayNum.length > 0">
            <h2>Collatz</h2>
            <ul>
                <li v-for="num in arrayNum" :key="num" v-html="$filters.isPar(num)"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "A1Collatz",
    data() {
        return {
            numero: -1,
            arrayNum: []
        }
    },
    methods: {
        colatzMethod() {
            let aux = [];
            aux.push(this.numero);
            while (this.numero != 1) {
                if (this.numero % 2 == 0) {
                    this.numero = this.numero / 2;
                } else {
                    this.numero = this.numero * 3 + 1;
                }
                aux.push(this.numero);
            }
            this.arrayNum = aux;
        }
    }
}
</script>

<style></style>