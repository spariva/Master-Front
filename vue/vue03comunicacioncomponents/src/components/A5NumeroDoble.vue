<template>
  <div>
    <h1>Número es {{ numero }} y doble: {{ doble }}</h1>
    <button @click="redirectHome()">Back home</button>
  </div>
</template>

<script>
export default {
    name: "A5NumeroDoble",
    watch: {
        '$route.params.num' (nextVal, oldVal) {
            if(nextVal != oldVal){
                this.numero = nextVal;
                this.doble = nextVal * 2;
            }
        }
    },
    methods:{
        redirectHome(){
            this.$router.push("/");
        }
    },
    data() {
        return {
            numero: 0,
            doble: 0
        }
    },
    mounted() {
        this.numero = this.$route.params.num;
        let valor = parseInt(this.$route.params.num);
        this.doble = valor * 2;
        if (this.$route.params.num == ""){
            console.log("No hay número");
            this.numero = "No hay número";
        }
    }
}
</script>

<style>

</style>