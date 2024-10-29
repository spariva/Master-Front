<template>
    <div>
        <input type="text" v-model="numero" @input="sanitizeInput" />
        <hr/>
        <ul>
            <li v-for="num in collatzComputed" :key="num" v-html="$filters.isPar(num)"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "A1Collatz",
    data(){
        return{
            numero: 0,
            arrayNum: []
        }
    },
    methods: {
        sanitizeInput() {
            let num = parseInt(this.numero, 10);
            if (isNaN(num) || num <= 0) {
                this.numero = 1;
            } else {
                this.numero = num;
            }
        }
    },
    computed:{
        collatzComputed(){
            let num = this.numero;
            if (isNaN(num) || num <= 0) {
                return [];
            }
            let aux = [];
            while(num !== 1){
                if(num % 2 === 0){
                    num = num / 2;
                } else {
                    num = num * 3 + 1;
                }
                aux.push(num);
            }
            return aux;
        }
    }
}
</script>

<style>

</style>