import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom'


export default class UpdateCoche extends Component {
  cajaMarca = React.createRef();
  cajaModelo = React.createRef();
  cajaConductor = React.createRef();
  cajaImagen = React.createRef();

  state = {
    status: false,
    coche: null
  }

  showDetail = () => {
    axios.get(Global.apiCoches + "/api/coches/findcoche/" + this.props.id).then(response => {
      this.setState({
        coche: response.data
      })
    })
  }

  componentDidMount = () => {
    this.showDetail();
  }

  updateCoche = (e) => {
    e.preventDefault();
    let coche = {
      idCoche: parseInt(this.props.id),
      marca: this.cajaMarca.current.value,
      modelo: this.cajaModelo.current.value,
      conductor: this.cajaConductor.current.value,
      imagen: this.cajaImagen.current.value
    }

    let url = Global.apiCoches + "api/coches/updatecoche";
    axios.put(url, coche).then(response=>{
      this.setState({
        status: true
      })
    })

  }

  render() {
    if (this.state.status) {
      return (<Navigate to="/" />)
    }
    return (
      <div>
        {
          this.state.coche ?
            (
              <form onSubmit={this.updateCoche}>
                <input type="text" ref={this.cajaMarca} className='form-control' placeholder='Marca' defaultValue={this.state.coche.marca}/>
                <input type="text" ref={this.cajaModelo} className='form-control' placeholder='Modelo' defaultValue={this.state.coche.modelo}/>
                <input type="text" ref={this.cajaConductor} className='form-control' placeholder='Conductor' defaultValue={this.state.coche.conductor}/>
                <input type="text" ref={this.cajaImagen} className='form-control' placeholder='Imagen' defaultValue={this.state.coche.imagen}/>
                <button className='btn btn-outline-primary'>Modificar</button>
              </form>
            ) : (<p>Loading...</p>)
        }
      </div>
    )
  }
}
