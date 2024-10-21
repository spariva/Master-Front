import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import Doctor from './Doctor'

export default class Doctores extends Component {
    state = {
        doctores: [],
        selectedDoctor: null
    }

    cargarDoctores = () => {
        var request = "api/doctores/doctoreshospital/" + this.props.idhospital
        var url = Global.apiDoctores + request
        axios.get(url).then(response => {
            console.log("leyendo");
            this.setState({
                doctores: response.data,
                selectedDoctor: null
            })
        })
    }

    componentDidMount = () => {
        this.cargarDoctores();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospital !== this.props.idhospital) {
            this.cargarDoctores();
        }
    }

    mostrarDetalle = (doctor) => {
        this.setState({
            selectedDoctor: doctor
        })
    }

  render() {
    return (
      <div>
        <h2>Doctores {this.props.idhospital}</h2>
        <table className='table table-bordered table-responsive table-danger mx-auto p-3'>
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Especialidad</th>
                    <th>Salario</th>
                    <th>id Hospital</th>
                    <th>Info</th>
                </tr>
            </thead>
            <tbody>
        {
            this.state.doctores.map((doctor, index) => {
                return(
                    <tr key={index}>
                        <td>{doctor.apellido}</td>
                        <td>{doctor.especialidad}</td>
                        <td>{doctor.salario}</td>
                        <td>{this.props.idhospital}</td>
                        <td><button className='btn btn-outline-info' onClick={()=> {this.mostrarDetalle(doctor, this.props.idhospital)}}>Detalles</button></td>
                    </tr>
                )
            })
        }
            </tbody>
        </table>
        <div className='d-flex'>
            <h2>
            {
                this.state.selectedDoctor && 
                (<Doctor doctor={this.state.selectedDoctor}/>)
            }</h2>
        </div>
      </div>
    )
  }
}
