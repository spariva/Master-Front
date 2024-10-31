<template>
    <div>
        <h2>Customers</h2>
        <input type="text" v-model="id" />
        <button @click="buscarPorId()">Buscar</button>
        <div v-if="error.length>0">
            <h3 class="red">{{ error }}</h3>
        </div>
        <div v-if="customerData">
            <h3>{{ customerData.customer.contactName }}</h3>
            <ul>
                <li>{{ customerData.customer.companyName }}</li>
                <li>{{ customerData.customer.companyName }}</li>
                <li>{{ customerData.customer.contactTitle }}</li>
                <li>{{ customerData.customer.address }}</li>
                <li>{{ customerData.customer.country }}: {{ customerData.customer.city }}</li>
                <li>{{ customerData.customer.phone }}</li>
            </ul>
            <button @click="verPedidos()">Ver pedidos</button>
            <div v-if="order">
                <h3>Pedidos</h3>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>fecha</th>
                            <th>productos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order in customerData.orders" :key="order">
                            <td>{{ order.order.id }}</td>
                            <td>{{ order.order.orderDate }}</td>
                            <td v-for="detail in order.orderDetails" :key="detail">
                                precio: {{ detail.unitPrice }} ||
                                cantidad: {{ detail.quantity }} ||
                                descuento: {{ detail.discount }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-for="cliente in customers" :key="cliente">
            <p>{{ cliente.companyName }} {{ cliente.contactName }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Global from '../Global.js';

export default {
    name: "A2Customers",
    data() {
        return {
            customers: [],
            id: "",
            customerData: null,
            error: "",
            order: false
        }
    },
    methods: {
        buscarPorId() {
            let request = "customers/"
            let url = Global.urlApiCustomers + request + this.id.toUpperCase()
            axios.get(url).then(response=>{
                this.customerData = response.data;
            }).catch(error=>{
                console.log(error)
                this.error = "No se ha encontrado el cliente"
            })
        },
        verPedidos() {
            if(this.customerData.orders.length>0){
                this.order = true;
            }else{
                this.order = false;
            }
        }
    },
    mounted() {
        let request = "customers"
        let url = Global.urlApiCustomers + request
        // console.log(url)

        axios.get(url).then(response => {
            this.customers = response.data.results
            // console.log(response.data.results)
        })

    }
}
</script>

<style>
.red{
    color: rgb(223, 77, 77);
}

table {
    border-collapse: collapse;
    width: 80%;
}

th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}
</style>