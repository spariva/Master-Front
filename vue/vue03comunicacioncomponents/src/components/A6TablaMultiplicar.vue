<template>
    <div>
        <table>
        <thead>
            <tr>
                <th>Operación</th>
                <th>Resultado </th>
            </tr>
        </thead>
        <tbody v-if="status">
            <tr v-for="i in 10" :key="i">
                <td>{{ numero }} x {{ i }}</td>
                <td>{{ numero * i }}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
    name: "A6TablaMultiplicar",
    watch:{
        '$route.params.num' (nextVal, oldVal) {
            if(nextVal != oldVal){
                this.numero = parseInt(nextVal);
                console.log(nextVal +3);
            }
        }
    },
    data(){
        return{
            numero: 0,
            status: false
        }
    },
    mounted(){
        let numParam = this.$route.params.num;
        // console.log (this.$route.params.num);
        // console.log (numParam);
        if (numParam == ""){
            this.status = false;
        } else {
            console.log(numParam + 2);
            this.numero = parseInt(numParam);
            this.status = true;
        }
    }
}
</script>

<style>
@import './../assets/css/tabla.css';
</style>