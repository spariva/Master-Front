import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';

export default class Hospitales extends Component {
    state = {
        hospitales: []
    }

    cargarHospitales = () => {
        let request = "webresources/hospitales";

        axios.get(Global.apiHospitales + request).then(response => {
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () =>{
        this.cargarHospitales();
    }

  render() {
    return (
      <div><h1>Componente Hospitales</h1>
        <table className='table table-bordered table-responsive table-warning table-hover mx-auto p-3'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Teléfono</th>
                    <th>Camas</th>
                </tr>
            </thead>
            <tbody>
        {
            this.state.hospitales.length > 0 &&
            (this.state.hospitales.map((hospital,i)=> {
                return(
                    <tr key={i}>
                        <td>{hospital.idhospital}</td>
                        <td>{hospital.nombre}</td>
                        <td>{hospital.direccion}</td>
                        <td>{hospital.telefono}</td>
                        <td>{hospital.camas}</td>
                    </tr>
                )
            }))
        }
            </tbody>
            </table>
      </div>
    )
  }
}
