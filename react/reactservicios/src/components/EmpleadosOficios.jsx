import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class EmpleadosOficios extends Component {
    selectOficios = React.createRef();
    urlEmpleados = Global.urlApiEmpleados;

    cargarEmpleados = (e) =>{
        e.preventDefault();
        let request = "/api/empleados"
        axios.get(this.urlEmpleados + request).then(response => {
            console.log("leyendo: " + response.data);
        })
    }

  render() {
    return (
      <div>EmpleadosOficios
        <select></select>
        <button onClick={this.cargarEmpleados}>Cargar</button>
      </div>
    )
  }
}
