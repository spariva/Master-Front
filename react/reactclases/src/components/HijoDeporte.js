import { Component } from "react";

export default class HijoDeporte extends Component {
    seleccionarFav = () => {
        var deporte = this.props.nombre;
        this.props.mostrarFav(deporte);
        console.log("entra hijo");
    }

    selectFav = () =>{
        this.setState({mensaje:"Deporte fav: " + this.props.nombre})
    }

    state = {
        mensaje: ""
    }

    render(){
        return(<div style={{color:"indigo"}}>
            Hijo:
            <p>{this.props.nombre}</p>
            <button onClick={this.seleccionarFav}>Favorito</button>
        </div>)
    }
}