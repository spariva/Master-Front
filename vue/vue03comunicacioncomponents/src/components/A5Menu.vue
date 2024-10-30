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
ul{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-items: space-around;
    align-items: center;
    gap: 10px;
}

li{
    flex: 1;
    gap: 10px;
}

li a{
    text-decoration: none;
    color: rgb(218, 136, 235);
    font-size: 1.5em;
}

li a:hover{
    color: rgb(154, 91, 235);
}
</style>