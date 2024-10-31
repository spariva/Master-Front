<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li v-for="num in numeros" :key="num">
        <router-link :to="'/tabla/' + num">{{ num }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
    name:"A6MenuTablaMultiplicar",
    data(){
        return{
            numeros: [1,2,3,4,5,6,7,8,9,10]
        }
    }
}
</script>

<style>
@import './../assets/css/navbarRosa.css';
</style>