import React, { Component } from 'react'

export default class ConjeturaCollatz extends Component {
    cajaNumero = React.createRef();

    state = {
        listaNumeros: [],
        numeroInicial: null
    }

    procesarForm = (evento) => {
        evento.preventDefault();
        var numero = parseInt(this.cajaNumero.current.value);
        this.setState({
            numeroInicial: numero
        })
        this.setState({
            listaNumeros: []
        })
        var listaNumArray = [];

        while (numero !== 1) {
            if (numero % 2 === 0) {
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1;
            }

            console.log(numero);
            listaNumArray.push(numero);
        }
        this.setState({
            listaNumeros: listaNumArray
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.numeroInicial &&
                    <p style={{ color: 'cornflowerblue' }}>Número inicial: {this.state.numeroInicial}</p>
                }
                <form onSubmit={this.procesarForm}>
                    <input type="text" placeholder="Número inicial" ref={this.cajaNumero} />
                    <button>Magia</button>
                </form>
                <ul>
                    {
                        this.state.listaNumeros.map((numero, index) => {
                            return (<li key={index}>{numero}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
