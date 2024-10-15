import React, { Component } from 'react'

export default class FormSimple extends Component {
    cajaNombre = React.createRef();
    cajaEdad = React.createRef();

    state = {
        user: null
    }

    procesarForm = (evento) => {
        evento.preventDefault();
        console.log("form funciona")
        let nombre = this.cajaNombre.current.value;
        let edad = parseInt(this.cajaEdad.current.value);
        this.setState(
            {
                user: {
                    nombre: nombre,
                    edad: edad
                }
            }
        )
        console.log(edad);

    }

  render() {
    return (
      <div>
        {
            this.state.user &&
            <p style={{color:'cornflowerblue'}}>{this.state.user.nombre} tiene {this.state.user.edad}</p>
        }
        <form onSubmit={this.procesarForm}>
            <label>Nombre: </label>
            <input type='text' ref={this.cajaNombre}/>
            <label>Edad: </label>
            <input type='text' ref={this.cajaEdad}/>
            <button>Enviar</button>
        </form>
      </div>
    )
  }
}
