import { Component } from "react";

export default class DibujosComplejos extends Component {
    dibujarNumeros = () => {
        var lista = [];

        for (let index = 0; index < 7; index++) {
            var numero = parseInt(Math.random() * 100) + 1;
            lista.push(<li key={index}>{numero}</li>);
        }

        return lista;
    }

    render() {
        return (
            <div>
                <h1>Dibujos Complejos HTML</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>)
    }
}