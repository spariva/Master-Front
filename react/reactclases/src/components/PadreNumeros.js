import { Component } from "react";
import HijoNumeros from "./HijoNumeros";

export default class PadreNumeros extends Component {
    listaInicial = [1,4,1,5,9]

    state = {
        listaNumerosHijos: this.listaInicial,
        resultadoTotal: 0
    }

    crearHijo = () => {
        var numeroAleatorio = parseInt(Math.random() * 100) + 1;
        this.state.listaNumerosHijos.push(numeroAleatorio);
        // var nuevaListaNumeros = [...this.state.listaNumerosHijos, numeroAleatorio];
        this.setState({listaNumerosHijos: this.state.listaNumerosHijos});
    }

    sumarPadre = (numero) => {
        var resultadoActualizado = this.state.resultadoTotal + numero;
        this.setState({resultadoTotal: resultadoActualizado});
    }

    
    render(){
        return(<div>
            <h2 style={{color:"pink"}}>Padre números: </h2>
            <h2>Resultado total: {this.state.resultadoTotal}</h2>
            <button onClick={this.crearHijo}>Crear nuevo hijo</button>
            {
            this.state.listaNumerosHijos.map((hijo, i) => {
                return (<HijoNumeros key={i} numero={hijo} sumarPadre={this.sumarPadre}/>)
            })
            }

        </div>)
    }
}