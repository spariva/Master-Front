import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class HomeDepartamentos extends Component {

    state = {
        status: false,
        departamentos: []
    }

    loadDepartamentos = () => {
        let request = "api/departamentos";
        let url = Global.apiDepartamentos + request;

        axios.get(url).then(response => {
            this.setState({
                departamentos: response.data,
                status: true
            })
        })
    }

    deleteDepartamento = (id) => {
      let request = "api/departamentos/" + id;
      let url = Global.apiDepartamentos + request;
      axios.delete(url, id).then(response=>{
        this.loadDepartamentos();
      })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    render() {
          if (this.state.status === false){
            return (<div><img src="../assets/img/loading.jpg" alt="cargando"/>
        </div>
        )
          }else{
            return (
              <div>
               <h1>Home Departamentos</h1>
               <table className='table table-warning table-hover'>
                <thead className='table table-dark'>
                  <tr>
                    <th>Id departamento</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th>Detalle</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.departamentos.map((departamento, index) => {
                      return (<tr key={index}>
                        <td>{departamento.numero}</td>
                        <td>{departamento.nombre}</td>
                        <td>{departamento.localidad}</td>
                        <td>
                            <NavLink to={"/detalle/" + departamento.numero} className="bt btn-info">Detalle</NavLink>
                        </td>
                        <td><NavLink to={"/update/" + departamento.numero + "/" + departamento.nombre + "/" + departamento.localidad} className="bt btn-success">Update</NavLink>
                        </td>
                        <td><NavLink to={"/delete/" + departamento.numero } className="bt btn-danger">Delete</NavLink>
                        </td>
                        <td><button className='btn btn-danger' onClick={()=> {this.deleteDepartamento(departamento.numero)}}>Borrar</button></td>
                      </tr>)
                    })
                  }
                </tbody>
               </table>
              </div>
             )
          }
         }
        
    
}
