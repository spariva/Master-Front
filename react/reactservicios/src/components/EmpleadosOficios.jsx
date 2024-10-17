import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class EmpleadosOficios extends Component {
  selectOficios = React.createRef();
  urlEmpleados = Global.urlApiEmpleados;
  arrayOficios = [];

  state = {
    oficiosDibujo: [],
    empleadosDibujo: []
  }

  cargarEmpleados = () => {
    let request = "/api/empleados"
    axios.get(this.urlEmpleados + request).then(response => {
      let oficiosSet = new Set();
      response.data.forEach((empleado) => {
        oficiosSet.add(empleado.oficio);
      })
      this.arrayOficios = Array.from(oficiosSet);
      console.log("array: " + this.arrayOficios);
    })

    this.setState({
      oficiosDibujo: this.arrayOficios
    })
    console.log("cargando...")
    console.log("state: " + this.state.oficiosDibujo)
  }

  buscarEmpleados = () => {
    let oficio = this.selectOficios.current.value;
    let request = "/api/Empleados/EmpleadosOficio/"

    axios.get(this.urlEmpleados + request + oficio).then(response => {
      console.log(response.data);
      this.setState({
        empleadosDibujo: response.data
      })
    })
  }

  componentDidMount = () => {
    this.cargarEmpleados();
  }

  render() {
    return (
      <div>EmpleadosOficios
        <select ref={this.selectOficios}>
          {
            this.state.oficiosDibujo.map((oficio, index) => {
              return (
                <option key={index} value={oficio}>{oficio}</option>
              )
            })
          }
        </select>
        <button onClick={this.cargarEmpleados}>Cargar</button>
        <button onClick={this.buscarEmpleados}>Buscar</button>
        <ul>
          {
            this.state.empleadosDibujo.map((empleado, index) => {
              return(
              <li key={index}>{empleado.apellido}</li>
            )
            })
          }
        </ul>
      </div>
    )
  }
}
