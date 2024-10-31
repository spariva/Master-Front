<template>
    <div>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/comics">Comics</router-link></li>
            <li><router-link to="/checkboxes">Checkboxes</router-link></li>
            <li><router-link to="/numerodoble">No param</router-link></li>
            <li><router-link to="/numerodoble/13">Param 13</router-link></li>
            <li v-for="num in numeros" :key="num">
                <router-link :to="'/numerodoble/' + num">{{ num }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "A5Menu",
    data(){
        return{
            numeros: [1,2,3,4]
        }
    }
}
</script>

<style>
@import './../assets/css/navbarRosa.css';
</style>