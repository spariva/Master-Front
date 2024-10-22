import React, { Component } from 'react'
import axios from 'axios';
import Global from './components/Global';
import { Navigate, NavLink } from 'react-router-dom';

export default class UpdateDepartamento extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        status: false
    }

    updateDepartamento = (e) => {
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

        axios.put(url, departamento).then(response => {
            console.log("put working" + response.data)
            this.setState({
                status: true
            })
        }) 
    }

  render() {
    return (
      <div>
        {
            this.state.status === true && 
            (<Navigate to="/"/>)
        }
        <h1>Update</h1>
        <NavLink to="/" />
        <ul className='list-group'>
            <li className='list-group-item'>{this.props.id}</li>
            <li className='list-group-item'>{this.props.nombre}</li>
            <li className='list-group-item'>{this.props.localidad}</li>
        </ul>
        <form onSubmit={this.updateDepartamento}>
            {/* esto del value para que no puedas cambiarlo, que si cambias el id modificas otro */}
            <input type="text"  placeholder='id' ref={this.cajaId} defaultValue={this.props.id}/>
            <input type="text"  placeholder='nombre' ref={this.cajaNombre} defaultValue={this.props.nombre}/>
            <input type="text"  placeholder='localidad' ref={this.cajaLocalidad} defaultValue={this.props.localidad}/>
            <button className='btn btn-outline-dark btn-pill'>Update</button>
        </form>
      </div>
    )
  }
}
