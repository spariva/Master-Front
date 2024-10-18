import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class Empleados extends Component {
  urlEmpleados = Global.urlApiEmpleados

  state = {
    empleados: [],
    texto: ""
  }

  loadEmpleados = () => {
    let request = "api/Empleados/EmpleadosDepartamento/";
    let idDepartamento = this.props.iddepartamento

    axios.get(this.urlEmpleados + request + idDepartamento).then(response => {
      console.log(response.data);
      this.setState({
        empleados: response.data
      })
    })
  }

  componentDidMount = () => {
    this.loadEmpleados();
  }

  componentDidUpdate = (oldProps) => {
    console.log("old" + oldProps.iddepartamento);
    console.log("Dibujando" + this.props.iddepartamento);

    if (oldProps.iddepartamento != this.props.iddepartamento){
      this.loadEmpleados();
    }
  }

  render() {
    return (
      <div>
        <h2>Empleados</h2>
        <p>{this.state.texto}</p>
        <table border="1">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.empleados.map((empleado, i) => {
                return(
                  <tr key={i}>
                  <td>{empleado.apellido}</td>
                  <td>{empleado.oficio}</td>
                  <td>{empleado.departamento}</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
