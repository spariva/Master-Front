<template>
    <div></div>
</template>

<script>
import ServicesCoches from '@/services/ServiceCoches';
import Swal from 'sweetalert2';
const service = new ServicesCoches();

export default {
    name: "DeleteCoche",
    mounted() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                service.deleteCoche(this.$route.params.id).then(result => {
                    console.log(result);
                    this.$router.push('/');
                });
            }
        });
    }
}

</script>

<style></style>