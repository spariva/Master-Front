<template>
  <div>
    <input type="text" placeholder="5" v-model="numero"/>
    <h2>Directiva</h2>
    <p v-if="(numero%2===0)" style='color:blueviolet'>Es par</p>
    <p v-else style='color:crimson'>Es impar</p>
    <hr/>
    <h2>Método</h2>
    <button @click="isParMethod()">par? method</button>
    <div v-html="html"></div>
    <hr/>
    <h2>Conmutada</h2>
    <div v-html="isPar"></div>
  </div>

</template>

<script>
export default {
    name: "A3ResumenDirectivasConmutadaMethd",
    data (){
        return{
            numero: 0,
            html: ""
        }
    },
    methods:{
        isParMethod(){
            this.html = "";
            if(this.numero % 2 === 0){
                this.html = "<p style='color:aqua'>Es par</p>";
            } else {
                this.html = "<p style='color:crimson'>Es impar</p>";
            }
        }
    },
    computed:{
        isPar(){
            if(this.numero % 2 === 0){
                return ("<p style='color:aqua'>Es par</p>");
            } else {
                return ("<p style='color:crimson'>Es impar</p>");
            }
        }
    }
}
</script>

<style>
    h2 {
        color:cornflowerblue
    }
</style>