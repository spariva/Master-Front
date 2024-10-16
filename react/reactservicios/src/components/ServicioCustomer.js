import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class ServicioCustomer extends Component {
    urlCustomers = Global.urlApiCustomers;


    state = {
        customers: []
    }

    loadCustomers = () => {
        console.log("antes del servicio");
        let request = "/customers.json";
        axios.get(this.urlCustomers + request).then(response => {
            console.log("leyendo el servicio");
            this.setState({
                customers: response.data.results
            })
        })
        console.log("después del servicio");
    }

    componentDidMount = () => {
        console.log("crea component");
        this.loadCustomers();
    }

    render() {
        return (
            <div style={{textAlign:'center', margin:'auto', padding:'10%', backgroundColor: 'lavender'}}>
                <h1>Servicio Api Customers</h1>
                <button onClick={this.loadCustomers}>Carga clientes</button>
                {
                    this.state.customers.map((customer, index) => {
                        return(<li key={index}>{customer.contactName}</li>)
                    })
                }
            </div>
        )
    }
}
