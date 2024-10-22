import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { NavLink } from 'react-router-dom'


export default class DetalleDepartamento extends Component {
    state = {
        departamento: null
    }

    cargarDepartamento = () => {
        let url = Global.apiDepartamentos + "/api/departamentos/" + this.props.id;

        axios.get(url).then(response=>{
            console.log("cargando departamento:" + response.data);
            this.setState({
                departamento: response.data
            })
        })
    }

    componentDidMount(){
        this.cargarDepartamento();
    }

  render() {
    return (
      <div>DetalleDepartamento + {this.props.id}
        <NavLink to="/">Back to home</NavLink>
      {
        this.state.departamento === null ?
        (<p>Sin departamento</p>):
        (<ul>
            {
              <ul>
                <li>
                  {this.state.departamento.nombre}
                </li>
                <li>
                  {this.state.departamento.numero}
                </li>
                <li>
                  {this.state.departamento.localidad}
                </li>
              </ul>        
            }
        </ul>)
      }
      </div>
    )
  }
}
