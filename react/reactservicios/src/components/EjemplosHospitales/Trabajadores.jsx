import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';

export default class Trabajadores extends Component {
    state = {
        trabajadores: [],
        mensaje: ""
    }

    loadTrabajadores = () => {
        let idHospitales = this.props.idhospitales;
        if(idHospitales.length !== 0){
            let data = ""
            for (var id of idHospitales){
                data += "idhospital=" + id + "&" 
            }

            data = data.substring(0, data.length -1);

            this.setState({
                mensaje: data
            })

            axios.get(Global.urlApiEjemplos + "api/trabajadores/trabajadoreshospitales?" + data).then(response =>{
                this.setState({
                    trabajadores: response.data
                })
            })
        }
    }

    componentDidMount = () => {
        this.loadTrabajadores();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps != this.props){
            this.loadTrabajadores();
        }
    }

  render() {
    return (
      <div>
        <h2>Trabajadores</h2>
        {/* {
            this.props.idhospitales.map((id, i) =>{
                return(
                    <tr key={i}>{id}</tr>
                )
            })
        } */}
        <div className='row align-items-center justify-content-center'>
            <div >
                <table className='table table-hover table-success table-striped'>
                    <thead className='table-secondary'>
                        <tr>
                            <th>Apellido</th>
                            <th>Salario</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.trabajadores.map((trabajador, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{trabajador.apellido}</td>
                                    <td>{trabajador.salario}</td>
                                    <td>{trabajador.idHospital}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}
