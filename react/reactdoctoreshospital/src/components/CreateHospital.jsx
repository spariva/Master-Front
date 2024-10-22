import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import {Navigate} from 'react-router-dom'

export default class CreateHospital extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    state = {
        mensaje: "",
        status: false
    }

    insertHospital = (e) => {
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let direccion = this.cajaDireccion.current.value;
        let telefono = this.cajaTelefono.current.value;
        let camas = this.cajaCamas.current.value;

        let hospital = {
            idhospital: id,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            camas: camas
        }
        axios.post(Global.apiHospitales + "webresources/hospitales/post", hospital).then(response => {
            this.setState({
                mensaje: "hospital creado: " + nombre,
                status: true
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.status === true &&
                    (<Navigate to="/hospitales"/>)
                }
                <form className='p2 ms-5 me-5' onSubmit={this.insertHospital}>
                    <div className="mb-3">
                        <label htmlFor={this.cajaId} className="form-label">ID</label>
                        <input type="text" className="form-control" ref={this.cajaId} aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nombre</label>
                        <input type="text" className="form-control" ref={this.cajaNombre}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="exampleCheck1">Dirección</label>
                        <input type="text" className="form-control" ref={this.cajaDireccion}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Camas</label>
                        <input type="text" className="form-control" ref={this.cajaCamas}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" ref={this.cajaTelefono}/>
                    </div>
                    <button type="submit" className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        )
    }
}
