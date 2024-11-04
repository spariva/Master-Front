<template>
  <div>
    <h2>homes {{ mensaje }}</h2>
  </div>
</template>

<script>
import ServiceEjemplo from '@/services/ServicesEjemplo.js';
//*const para usar el service
const service = new ServiceEjemplo();
export default {
    name: "A5Home",
    data(){
        return{
            mensaje: ""
        }
    },
    mounted(){
        this.mensaje = service.getSauludo("Maki")
    }
}
</script>

<style>

</style>