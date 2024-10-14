import { Component } from "react";

//método externo a la clase que no puede utilizar nada del component y no puede acceder a this, ni a nada del component
function metodoExterno() {
    console.log("Método externo");
}

class Contador extends Component {
    //variables sin var, let o const y fuera del render
    numero = 1;

    incrementarNumero = () => {
        this.numero++;
        console.log(this.numero);
    }

    state = {
        valor: parseInt(this.props.inicio)
    }

    incrementar = () => {
        this.setState({valor: this.state.valor + 1})
    }
//si llamas con lambda, no se ponen paréntesis en los métodos o entra en bucle infinito, si usas lamba sí se ponen paréntesis
    render() {
        return (
        <div>
            <h2>Class component contador: {this.props.inicio}</h2>
            <h2>Class component contador: {this.props.valor}</h2>
            <button onClick={this.incrementar}>Incrementar state</button>
            <p>{this.state.valor}</p>
            <button onClick={()=>{this.incrementarNumero()
            metodoExterno()
            }}>Incrementar numero</button>
        </div>)
    }
}

export default Contador;