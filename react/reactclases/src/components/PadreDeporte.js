import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

export default class PadeDeporte extends Component {
    deportes = ["Curling", "Ajedrez", "Voley", "Baloncesto"]
    state = {
        deporteFav: ""
    }

    mostrarFav = (deporteSeleccionado) => {
        this.setState({deporteFav: deporteSeleccionado});
        console.log("entra padre");
    }
    render(){
        return(<div>
            <h2 style={{color:"pink"}}>Neidre: </h2>
            <h3>Dep fav: {this.state.deporteFav}</h3>
            {   
                this.deportes.map((deporte, index) => {
                    return (<HijoDeporte key={index} nombre={deporte} mostrarFav={this.mostrarFav}/>)
                })
            }
        </div>)
    }
}