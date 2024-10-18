import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class Equipos extends Component {
    cajaNombre = React.createRef();
    selectEquipo = React.createRef();
    urlBase = Global.urlApiJugadores;
    //jugadoresAll = [];
    equiposAll = [];

    state = {
        jugadoresDibujo: [],
        equiposAll: []
    }


    //? BUSCAR JUGADOR E IMPRIMIR TABLA. 
    // Me di cuenta después que no lo necesitaba:
    // cargarJugadores = () => {
    //     let request = "api/jugadores";

    //     axios.get(this.urlBase + request).then(response => {
    //         // console.log(response.data);
    //         this.jugadoresAll = response.data;
    //         // console.log(this.jugadoresAll[0]);
    //     })
    // }

    buscarPorNombre = (e) => {
        e.preventDefault();
        let nombre = this.cajaNombre.current.value;
        let request = "api/jugadores/findjugadores/"

        axios.get(this.urlBase + request + nombre).then(response => {
            this.setState({
                jugadoresDibujo: response.data
            })
        })

    }


    //? BUSCAR POR EQUIPO Y SACAR JUGADORES.
    cargarEquipos = () => {
        let request = "api/equipos";

        axios.get(this.urlBase + request).then(response => {
            // console.log(response.data);
            this.equiposAll = response.data;
            this.setState({
                equiposAll: this.equiposAll
            })
        })
    }

    buscarPorEquipo = (e) => {
        e.preventDefault();
        let request = "api/Jugadores/JugadoresEquipos/";
        let idEquipo = parseInt(this.selectEquipo.current.value);

        axios.get(this.urlBase + request + idEquipo).then(response => {
            console.log(response.data);
            this.setState({
                jugadoresDibujo: response.data
            })
        })
    }

    componentDidMount = () => {
        //this.cargarJugadores(); 
        this.cargarEquipos();
    }

    render() {
        return (
            <div>
                <h2>Mini Practica React Maki</h2>
                <form onSubmit={this.buscarPorNombre}>
                    <label>Nombre Jugador</label>
                    <input type="text" ref={this.cajaNombre} />
                    <button>Buscar por NOMBRE</button>
                </form>
                <hr></hr>
                <form onSubmit={this.buscarPorEquipo}>
                    <label>Seleccione un equipo</label>
                    <select ref={this.selectEquipo}>
                        {
                            this.equiposAll.map((equipo, i) => {
                                return (
                                    <option key={i} value={equipo.idEquipo}>{equipo.nombre}</option>
                                )
                            })
                        }
                    </select>
                    <button>Buscar Jugadores</button>
                </form><br></br>
                {
                    this.state.jugadoresDibujo.length > 0 &&
                    (<table border="1">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Posición</th>
                                <th>País</th>
                                <th>Fecha nacimiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.jugadoresDibujo.map((jugador, i) => {
                                    return (
                                        <tr key={i}>
                                            <td><img src={jugador.imagen} alt={jugador.nombre} /></td>
                                            <td>{jugador.nombre}</td>
                                            <td>{jugador.posicion}</td>
                                            <td>{jugador.pais}</td>
                                            <td>{jugador.fechaNacimiento}</td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </table>
                    )
                }
            </div>
        )
    }
}
