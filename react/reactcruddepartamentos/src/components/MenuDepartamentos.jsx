import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import axios from 'axios'
// import Global from './Global'

export default class MenuDepartamentos extends Component {
    state = {
        departamentos: []
    }

    // cargarDepartamentos = () => {
    //     var request = "webresources/departamentos"
    //     var url = Global.apiDepartamentos + request
    //     axios.get(url).then(response => {
    //         this.setState({
    //             departamentos: response.data
    //         })
    //     })
    // }

    // componentDidMount = () => {
    //     this.cargarDepartamentos();
    // }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/"> 🤖Departamentos CRUD</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample03">
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">

                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/create">Create</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/update">Update</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/departamentos" target="_blank">Departamentos</NavLink>
                                </li> */}
                                {/* <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-expanded="false">Departamentos</NavLink>
                                    <ul className="dropdown-menu">
                                        {
                                            this.state.departamentos.map((hospital, index) => {
                                                return (
                                                    <li key={index}>
                                                        <NavLink className="dropdown-item btn-success" to={"/doctores/" + hospital.idhospital}>{hospital.nombre}</NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
