import { Component } from "react";

export default class DibujosComplejosReact extends Component {
    state = {
        nombres: ["Shaco", "Morgana", "Malzahar"]

    }

    generarNombre = () => {
        this.state.nombres.push("Nuevo nombre");
        this.setState({
            nombres: this.state.nombres
        });
    }

    render() {
        return (
            <div>
                <h1>Dibujos Complejos React map</h1>
                <button onClick={this.generarNombre}>Generar nombre</button>
                {
                    //Código JSX código lógico debe dar return
                    this.state.nombres.map((nombre, index) => {
                        return (<li key={index}>{nombre}</li>)
                    })
                }
                <ul>
                </ul>
            </div>)
    }
}