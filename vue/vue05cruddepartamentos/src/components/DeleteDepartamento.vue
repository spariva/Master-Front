<template>
  <div>
    <h2>delete {{ $route.params.id }}</h2>
  </div>
</template>

<script>
import ServicesDepartamentos from '@/services/ServicesDepartamentos';
const service = new ServicesDepartamentos();

export default {
    name:"DeleteDepartamento",
    mounted(){
      let id = this.$route.params.id;
      console.log(id);
      service.deleteDepartamento(id);
      this.$router.push("/");
    }
}
</script>

<style>

</style>