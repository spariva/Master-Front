import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CreateCoche extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        status: false
    }

    crearCoche = (e) => {
        e.preventDefault();
        let coche = {
            idCoche: parseInt(this.cajaId.current.value),
            marca: this.cajaMarca.current.value,
            modelo: this.cajaModelo.current.value,
            conductor: this.cajaConductor.current.value,
            imagen: this.cajaImagen.current.value
        }

        let request = "api/coches/insertcoche"
        let url = Global.apiCoches + request

        axios.post(url, coche).then(response => {
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
                <form onSubmit={this.crearCoche}>
                    <input type="text" ref={this.cajaId} className='form-control' placeholder='ID'/>
                    <input type="text" ref={this.cajaMarca} className='form-control' placeholder='Marca'/>
                    <input type="text" ref={this.cajaModelo} className='form-control' placeholder='Modelo'/>
                    <input type="text" ref={this.cajaConductor} className='form-control' placeholder='Conductor'/>
                    <input type="text" ref={this.cajaImagen} className='form-control' placeholder='Imagen'/>
                    <button className='btn btn-outline-dark'>Crear coche</button>
                </form>
            )
        }
    </div>
    )
  }
}
