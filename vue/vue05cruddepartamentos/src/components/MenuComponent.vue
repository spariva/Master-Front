<template>
    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <router-link class="navbar-brand" to="/">Home</router-link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><router-link class="nav-link" to="/"></router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/create">Crear</router-link></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Oficios
                            </a>
                            <ul class="dropdown-menu">
                                <!-- <li v-for="o in oficios" :key="o">
                                    <router-link class="dropdown-item" :to="'/oficiosdetalle/' + o">
                                        {{ o }}
                                    </router-link>
                                </li> -->
                            </ul>
                        </li>

                        <li class="nav-item"><a class="nav-link" href="#signup">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "MenuComponent",

}
</script>

<style>
#nav{
    margin-bottom: 40px;
}
</style>