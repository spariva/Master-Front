import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class Equipo extends Component {
  state = {
    equipo: null
  }

  loadEquipo = () => {
    let request = "api/equipos/" + this.props.id;
    let url = Global.apiApuestas + request;

    axios.get(url).then(response => {
        this.setState({
            equipo: response.data
        })
    })
}

componentDidMount = () => {
    this.loadEquipo();
}

componentDidUpdate = (oldProps) => {
    if (this.props !== oldProps) {
        this.loadEquipo();
    }
}

  render() {
    return (
      <div>Equipo {this.props.id}
      {
        this.state.equipo && 
        (
          <table className='table table-success table-hover'>
            <thead className='table table-dark'>
              <tr>
                <th>idEquipo</th>
                <th>Nombre</th>
                <th>Img</th>
                <th>Champions</th>
                <th>Web</th>
                <th>Descripcion</th>
                <th>Finalista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.id}</td>
                <td>{this.state.equipo.nombre}</td>
                <td><img src={this.state.equipo.imagen} style={{width:"100px", height:"100px"}} alt={this.state.equipo.nombre}/></td>
                <td>{this.state.equipo.champions}</td>
                <td>{this.state.equipo.web}</td>
                <td>{this.state.equipo.descripcion}</td>
                <td>{this.state.equipo.finalista}</td>             
              </tr>
            </tbody>
          </table>
        )
      }
      </div>
    )
  }
}
