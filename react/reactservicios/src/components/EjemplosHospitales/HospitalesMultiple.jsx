import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';
import Trabajadores from './Trabajadores';


export default class HospitalesMultiple extends Component {
    selectHospital = React.createRef();

    state = {
        hospitales: [],
        hospitalesSeleccionados: []
    }

    loadHospitales = () => {
        let request = "api/hospitales/";
        let url = Global.urlApiEjemplos + request;
        axios.get(url).then(response => {
            this.setState({
                hospitales: response.data
            })
        })
    }

    seleccionarHospital = (e) => {
        e.preventDefault();
        let aux = [];
        let options = this.selectHospital.current.options;

        for (var option of options){
            if(option.selected){
                aux.push(option.value);
                console.log("option: " + option)
            }
        }

        this.setState({
            hospitalesSeleccionados: aux
        })
    }

    componentDidMount() {
        this.loadHospitales();
    }


    render() {
        return (
            <div className='container text-center'>
                <div className='row align-items-center justify-content-center p-5'>
                    <div className='col-6 p-5'>
                        <select ref={this.selectHospital} multiple className='form-select form-select-sm'>
                            {
                                this.state.hospitales.map((hospital, i) => {
                                    return (
                                        <option key={i} value={hospital.idHospital} className='fst-italic'>{hospital.nombre}</option>
                                    )
                                })
                            }
                        </select>
                        <button onClick={this.seleccionarHospital} className='btn btn-info p5'>Enviar</button>
                    </div>
                </div>

                <div className='row align-items-center justify-content-center p-5'>
                    <div className='col-6 p-5'>
                            {/* <ul>
                                {
                                    this.state.hospitalesSeleccionados.map((id, i) => {
                                        return(
                                            <li key={i} value={id}>{id}</li>
                                        )
                                    })
                                    
                                }
                            </ul> */}
                            {
                                this.state.hospitalesSeleccionados.length > 0 &&
                                (<Trabajadores idhospitales={this.state.hospitalesSeleccionados}/>)                         
                            }
                    </div>  
                </div>
            </div>
        )
    }
}
