import { Component } from "react";

export default class HijoNumeros extends Component {
    sumarHijo = () => {
        console.log("entra hijo: " + this.props.numero);
        this.props.sumarPadre(this.props.numero);
    }

    render(){
        return(<div>
            <h2 style={{color:"burlywood"}}>hijo: {this.props.numero}</h2>
            <button onClick={this.sumarHijo}>Suma {this.props.numero}</button>
        </div>)
    }
}