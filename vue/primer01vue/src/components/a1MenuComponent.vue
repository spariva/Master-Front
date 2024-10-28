<template>
    <div>
        <h1>Menú</h1>
        <ul id="menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/music">Música</router-link></li>
            <li><router-link to="/cine">Cine</router-link></li>
            <li><router-link to="/vida">Vida</router-link></li>
            <li><router-link to="/directivas">Directivas</router-link></li>
            <li><router-link to="/conmutada">Prop conmutada</router-link></li>
            <li><router-link to="/resumen">Resumen</router-link></li>
            <li><router-link to="/filters">Filters</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "a1MenuComponent",
};
</script>

<style>
ul#menu li {
    display: inline;
    margin-right: 10px;
    flex: 1;
}

ul#menu {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-items: space-around;
    align-items: center;
}
</style>