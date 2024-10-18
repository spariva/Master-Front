import React, { Component } from 'react'
import Empleados from './Empleados'
import axios from 'axios';
import Global from '../../Global';

export default class Departamentos extends Component {
  selectDepartamento = React.createRef();
  urlDepartamentos = Global.urlApiDepartamentos;

  state = {
    departamentos: [],
    iddepartamento: 0
  }

  loadDepartamentos = () => {
    let request = "/api/departamentos";

    axios.get(this.urlDepartamentos + request).then(response => {
      console.log(response.data);

      this.setState({
        departamentos: response.data
      })
    })
  }

  buscarEmpleados = (e) => {
    e.preventDefault();
    let iddepartamento = this.selectDepartamento.current.value;
    this.setState({
      iddepartamento: iddepartamento
    })

  }

  componentDidMount = () => {
    this.loadDepartamentos();
  }

  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <form onSubmit={this.buscarEmpleados}>
          <select ref={this.selectDepartamento}>
            {
              this.state.departamentos.map((departamento, i) => {
                return (
                  <option key={i} value={departamento.Numero}>{departamento.Nombre}</option>
                )
              })
            }
          </select>
          <button>Buscar empleados</button>
        </form>
        {/* <Empleados iddepartamento={this.selectDepartamento.current.value}/> */}
        <h2>Id departamento: {this.state.iddepartamento}</h2>
        {
          this.state.iddepartamento !== 0 &&
          (<Empleados iddepartamento={this.state.iddepartamento}/>)
        }
      </div>
    )
  }
}
