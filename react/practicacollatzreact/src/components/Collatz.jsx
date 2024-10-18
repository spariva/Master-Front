import React, { Component } from 'react'

export default class Collatz extends Component {
    state = {
        listaNumerosDibujo: []
    }

    generarListaCollatz = () => {
        let numero = this.props.numero;
        console.log(numero);
        while (numero !== 1) {
            if (numero % 2 === 0){
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1
            }
            this.state.listaNumerosDibujo.push(numero);
        }
        this.setState({
            listaNumerosDibujo: this.state.listaNumerosDibujo
        })
    }

    componentDidMount = () => {
        this.generarListaCollatz();
    }

  render() {
    return (
      <div>
        <h2 style={{color:'hotpink'}}>Collatz {this.props.numero}</h2>
        <ul>
            {
                this.state.listaNumerosDibujo.map((numero, i) => {
                    return(<li key={i}>{numero}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
