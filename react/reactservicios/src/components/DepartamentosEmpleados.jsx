import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class DepartamentosEmpleados extends Component {
    selectDepartamento = React.createRef();
    urlDepartamentos = Global.urlApiDepartamentos;
    urlEmpleados = Global.urlApiEmpleados;

    state = {
        departamentos: [],
        empleados: []
    }


    buscarEmpleados = (e) => {
        e.preventDefault();
        var request = "/api/Empleados/EmpleadosDepartamento/"
        let idDepartamento = this.selectDepartamento.current.value;
        console.log(idDepartamento);

        axios.get(this.urlEmpleados + request + idDepartamento).then(response => {
            console.log(response.data);
            this.setState({
                empleados: response.data
            })
        })

    }

    cargarDepartamentos = () => {
        var request = "/api/departamentos";
        axios.get(this.urlDepartamentos + request).then(response => {
            this.setState({
                departamentos: response.data
            });
        })
    }

    componentDidMount = () => {
        this.cargarDepartamentos();
    }


    render() {
        return (
            <div>
                <h1>Departamentos Empleados</h1>
                <select ref={this.selectDepartamento} onChange={this.buscarEmpleados}>
                    {
                        (this.state.departamentos.length > 0) &&
                        (this.state.departamentos.map((departamento, index) => {
                            return (<option key={index} value={departamento.Numero}>{departamento.Nombre}</option>)
                        }))
                    }
                </select>
                <div>
                    {
                        (this.state.empleados.length > 0) &&
                        (
                            this.state.empleados.map((empleado, index) => {
                                return(
                                <li key={index}>
                                    {empleado.apellido}: {empleado.oficio}
                                </li>)
                            })
                        )
                    }
                </div>
            </div>
        )
    }
}
