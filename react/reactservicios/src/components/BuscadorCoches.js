import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'


export default class BuscadorCoches extends Component {
    request = "/webresources/coches";
    cajaCoche = React.createRef();
    url = Global.urlApiCoches;
    todosCoches = [];
    state = {
        coches: []
    }

    componentDidMount() {
        this.cargarCoches();
    }

    cargarCoches = () => {
        console.log("cargando coches...");

        axios.get(this.url + this.request).then(response => {
            this.todosCoches = response.data;
            console.log(this.todosCoches);
        }).catch(error => {
            console.error("Error al cargar customer:", error);
        })
    }

    buscarCoche = (e) => {
        e.preventDefault();
        var cocheMarca = this.cajaCoche.current.value;

        for (let i = 0; i < this.todosCoches.length; i++) {
            if (this.todosCoches[i].marca == cocheMarca) {
                this.state.coches.push(this.todosCoches[i]);
                console.log("encontrado");
            }
        }
        if (this.state.coches.length > 0) {
            this.setState({
                coches: this.state.coches
            })
        } else {
            alert("Coche no encontrado =(");
        }

        // var cochesFiltrados = [];

        // for (var car of this.state.coches) {
        //     if (car.marca === cocheMarca) {
        //         cochesFiltrados.push(car);
        //     }
        // }
        // var cochesFiltrados = this.todosCoches.filter(coche => coche.marca.toLowerCase() == cocheMarca);
        // this.setState({
        //     coches: cochesFiltrados
        // })

    }

    render() {
        return (
            <div>
                <h1>Buscador Coches</h1>
                <form onSubmit={this.buscarCoche} >
                    <input type="text" ref={this.cajaCoche} />
                    <button>buscar</button>
                </form>
                <div>
                    <table border="1">
                        <thead>                        
                        <tr >
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>imagen</th>
                        </tr>
                        </thead>

                        <tbody>

                            {
                                (this.state.coches.length > 0) &&
                                (this.state.coches.map((coche, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{coche.marca}</td>
                                            <td>{coche.modelo}</td>
                                            <td><img src={coche.imagen} alt={coche.modelo} style={{ width: "150px", height: "150px" }} /></td>
                                        </tr>

                                    )
                                }))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
