import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    selectNumero = React.createRef();
    state = {
        seleccionados: ""
    }

    mostrarSeleccionados = (e) => {
        e.preventDefault();
        let options = this.selectNumero.current.options;
        let seleccionados = "";
        for (let index = 0; index < options.length; index++) {
            if (options[index].selected) {
                seleccionados += options[index].value;
            }
        }
        this.setState({
            seleccionados: seleccionados
        });
    }

  render() {
    return (
      <div>
        <h1>Seleccion Multiple</h1>
        <h2 style={{color:'crimson'}}>{this.state.seleccionados}</h2>
        <form onSubmit={this.mostrarSeleccionados}>
            <select size="10" multiple ref={this.selectNumero}>
                <option>Elemento 1</option>
                <option>Elemento 2</option>
                <option>Elemento 3</option>
                <option>Elemento 4</option>
                <option>Elemento 5</option>
                <option>Elemento 6</option>
                <option>Elemento 7</option>
            </select>
            <button>Mostrar seleccionados</button>
        </form>
      </div>
    )
  }
}
