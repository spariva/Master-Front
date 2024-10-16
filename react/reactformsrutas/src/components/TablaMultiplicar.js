import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajaNumero = React.createRef();
    selectNumero = React.createRef();

    componentDidMount() {
        let listaNumerosAleatorios = [];
        for (let index = 0; index < 11; index++) {
            var random = parseInt((Math.random() * 100));
            listaNumerosAleatorios.push(<option key={index} value={random}>{random}</option>);
        }
        this.setState({
            listaNumerosAleatorios: listaNumerosAleatorios
        });
        // return listaNumerosAleatorios;
    }

    state = {
        numeroInicial: null,
        listaNumerosAleatorios: [3],
        listaNumeros: []
    }

    procesarForm = (e) => {
        e.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        this.tablaMultiplicar(numero);
    }

    seleccionarNumero = () => {
        var numeroSelected = this.selectNumero.current.value;
        this.tablaMultiplicar(numeroSelected);
    }

    tablaMultiplicar = (numero) => {
        var aux = [];
        for (let index = 0; index < 11; index++) {
            aux.push(numero * index);
        }

        this.setState({
            numeroInicial: numero,
            listaNumeros: aux
        })
    }



    render() {
        return (
            <div>
                <form onSubmit={this.procesarForm}>
                    <input type="text" placeholder="Número inicial" ref={this.cajaNumero} />
                    <button>Tabla multiplicar</button>
                </form>
                <select ref={this.selectNumero} onChange={this.seleccionarNumero}>
                    {
                        this.state.listaNumerosAleatorios.map((numero, index) => {
                            return (
                                <option key={index}>{numero}</option>
                            )
                        })

                    }
                                    {
                    // this.cargarOptions()
                }
                </select>
                {
                    this.state.numeroInicial &&
                    (
                        <div>
                            <h3 style={{ color: 'darkcyan' }}>{this.state.numeroInicial}</h3>
                            <table border="1px">
                                <thead>
                                    <tr>
                                        <th>Tabla del {this.state.numeroInicial}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.listaNumeros.map((numero, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td >{this.state.numeroInicial} * {index} = {numero}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        )
    }
}
