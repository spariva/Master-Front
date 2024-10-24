import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class Apuestas extends Component {
  cajaId = React.createRef();
  cajaUsuario = React.createRef();
  cajaResultado = React.createRef();
  cajaFecha = React.createRef();

  state = {
    apuestas: [],
    status: false
  }

  loadApuestas = () => {
    let request = "api/apuestas/";
    let url = Global.apiApuestas + request;
    let aux = []

    axios.get(url).then(response => {
      aux.push(response.data)
      this.setState({
        apuestas: response.data
      })

    })
  }

  componentDidMount = () => {
    this.loadApuestas();
  }

  componentDidUpdate = (oldProps) => {
    if (this.props !== oldProps) {
      this.loadApuestas();
    }
  }

  crearApuesta = (e) => {
    e.preventDefault();
    let apuesta = {
        idApuesta: parseInt(this.cajaId.current.value),
        usuario: this.cajaUsuario.current.value,
        resultado: this.cajaResultado.current.value,
        fecha: this.cajaFecha.current.value
    }

    let request = "api/apuestas"
    let url = Global.apiApuestas + request
    console.log(url);
    axios.post(url, apuesta).then(response => {
        this.setState({
            status: true
        })
        console.log(response.data);
    }) 
}


  render() {
    return (
      <div>
        <form onSubmit={this.crearApuesta}>
          <input type="text" ref={this.cajaId} className='form-control' placeholder='ID' />
          <input type="text" ref={this.cajaUsuario} className='form-control' placeholder='Usuario' />
          <input type="text" ref={this.cajaResultado} className='form-control' placeholder='Resultado' />
          <input type="text" ref={this.cajaFecha} className='form-control' placeholder='Fecha' />
          <button className='btn btn-outline-dark'>Crear apuesta</button>
        </form>
        {
          this.state.apuestas.length > 0 &&
          (
            <table className='table table-success table-hover'>
              <thead className='table table-dark'>
                <tr>
                  <th>idApuesta</th>
                  <th>Usuario</th>
                  <th>Resultado</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.apuestas.map((apuesta, i) => {
                    return (
                      <tr key={i}>
                        <td>{apuesta.idApuesta}</td>
                        <td>{apuesta.usuario}</td>
                        <td>{apuesta.resultado}</td>
                        <td>{apuesta.fecha}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          )
        }
      </div>
    )
  }
}
