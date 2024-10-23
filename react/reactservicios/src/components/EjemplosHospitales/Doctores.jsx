import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';


export default class Doctores extends Component {
    state = {
        doctores: [],
        mensaje: ""
    }

    loadDoctores = () => {
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

            axios.get(Global.urlApiEjemplos + "api/doctores/doctoreshospital?" + data).then(response =>{
                this.setState({
                    doctores: response.data
                })
            })
        }
    }

    componentDidMount = () => {
        this.loadDoctores();
    }

  render() {
    return (
      
        <div>
        <h2>Doctores</h2>
        {
            this.props.idhospitales.map((id, i) =>{
                return(
                    <li key={i}>{id}</li>
                )
            })
        }
        <div className='row align-items-center'>
            <div className='col-5'>
                <ul className='list-group'>
                    {
                        this.state.doctores.map((doctor, i)=>{
                            return(
                                <li key={i} className='list-group-item'>{doctor.apellido}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
