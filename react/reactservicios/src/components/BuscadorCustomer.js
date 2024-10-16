import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class BuscadorCustomer extends Component {
    cajaId = React.createRef();
    url = Global.urlApiCustomers;
    state = {
        customer: null
    }

    componentDidMount(){
        console.log(this.url)
    }

    buscar = (e) => {
        e.preventDefault();
        let customerId = this.cajaId.current.value;
        let request = "/customers/" + customerId + ".json";

        axios.get(this.url + request).then(response => {
            console.log("leyendo servicio")
            this.setState({
                customer: response.data.customer
            })
        }).catch(error => {
            console.error("Error al buscar customer:", error);
            this.setState({ customer: null });
        });

    }

    render() {
        return (
            <div style={{textAlign:'center', padding:'100px'}}>
                <h3>Buscador Customer</h3>
                <form onSubmit={this.buscar}>
                    <input type="text" ref={this.cajaId}/>
                    <button>buscar</button>
                </form>
                {
                    this.state.customer &&
                    (<ul>
                        <li style={{color:'deeppink'}}>Cliente: {this.state.customer.contactName}</li>
                        <li>Empresa: {this.state.customer.companyName}</li>
                        <li>Puesto: {this.state.customer.contactTitle}</li>
                        <li>Ciudad: {this.state.customer.city}</li>
                    </ul>)
                }
            </div>
        )
    }
}
