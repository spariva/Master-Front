import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }

    generarTablaMultiplicar = () => {
        let aux = [];
        let num = parseInt(this.props.numero);
        for (let i = 0; i < 10; i++) {
            var operacion = num * i;
            aux.push(operacion);
            
        }
        this.setState({
            tabla: aux
        })
    }

    componentDidMount = () => {
        this.generarTablaMultiplicar();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.numero !== this.props.numero){
            this.generarTablaMultiplicar()
        }
    }

  render() {
    return (
      <div style={{backgroundColor:'olivedrab'}}>
        <h3 style={{color:'springgreen'}}>{this.props.numero}</h3>
        <ul>
            {
                this.state.tabla.map((numero, index)=> {
                    return(
                        <li key={index} style={{color:'deeppink'}}>{numero}</li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}
