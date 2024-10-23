import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';
import Trabajadores from './Trabajadores';
import Doctores from './Doctores';


export default class HospitalesMultiple extends Component {
    selectHospital = React.createRef();
    incremento = React.createRef();

    state = {
        hospitales: [],
        hospitalesSeleccionados: [],
        mensaje: ""
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

    seleccionarHospital = () => {
        //e.preventDefault();
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

    subirSueldos = (e) => {
        e.preventDefault();

        if(this.state.hospitalesSeleccionados.length !== 0){
            this.seleccionarHospital();

            let data = ""
            for (var id of this.state.hospitalesSeleccionados){
                data += "idhospital=" + id + "&"
            }

            data = data.substring(0, data.length -1);

            //let ex = "https://apiejemplos.azurewebsites.net/api/Trabajadores/UpdateSalarioTrabajadoresHospitales?incremento=2&idhospital=2&idhospital=3"
            let request = "api/trabajadores/UpdateSalariotrabajadoresHospitales?incremento=" + parseInt(this.incremento.current.value) + "&" + data;
            let url = Global.urlApiEjemplos + request;
            axios.put(url).then(response =>{
                console.log("salary up");
                this.setState({
                    mensaje: "salario up"
                })
            })
        }

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
                        <input type="text" ref={this.incremento} placeholder="100"></input>
                        <button onClick={this.subirSueldos} className='btn btn-success p5'>Salary Up</button>
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
