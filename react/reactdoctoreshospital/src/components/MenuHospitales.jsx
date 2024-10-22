import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'

export default class MenuHospitales extends Component {
    state = {
        hospitales: []
    }

    cargarHospitales = () => {
        var request = "webresources/hospitales"
        var url = Global.apiHospitales + request
        axios.get(url).then(response => {
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarHospitales();
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="#">Hospitales CRUD</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample03">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">

                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/create" target="_blank">Create</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/hospitales" target="_blank">Hospitales</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-expanded="false">Hospitales</NavLink>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.hospitales.map((hospital, index) => {
                                                return (
                                                    <li key={index}>
                                                        <NavLink className="dropdown-item btn-success" to={"/doctores/" + hospital.idhospital}>{hospital.nombre}</NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
