import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        status: false
    }

    insertarDepartamento = (e) => {
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value)
        let nombre = this.cajaNombre.current.value
        let localidad = this.cajaLocalidad.current.value
        let departamento = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }

        let request = "api/departamentos"
        let url = Global.apiDepartamentos + request

        axios.post(url, departamento).then(response => {
            this.setState({
                status: true
            })
        }) 
    }


  render() {
    return (
      <div>
        {
            this.state.status === true ?
            (<Navigate to="/"/>):(
                <form onSubmit={this.insertarDepartamento}>
                    <input type="text" ref={this.cajaId} className='form-control' placeholder='ID'/>
                    <input type="text" ref={this.cajaNombre} className='form-control' placeholder='Nombre'/>
                    <input type="text" ref={this.cajaLocalidad} className='form-control' placeholder='Localidad'/>
                    <button className='btn btn-outline-dark'>Crear dept</button>
                </form>
            )
        }
      </div>
    )
  }
}
