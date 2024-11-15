<template>
    <div>
        <h2>Perfil</h2>
        <p>Perfil de usuario</p>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ empleado.apellido }}</h5>
                <p class="card-text">{{ empleado.oficio }}</p>
                <p class="card-text">{{ empleado.salario }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceLogin from '@/services/ServiceLogin';
const service = new ServiceLogin();

export default {
    name: 'PerfilComponent',
    data() {
        return {
            empleado: {}
        }
    },
    mounted() {
        service.getEmpleado(this.$route.params.id).then(response => {
            this.empleado = response;
        });
        service.getPerfil().then(response => {
            console.log(response);
        });
    }
}
</script>

<style>

</style>