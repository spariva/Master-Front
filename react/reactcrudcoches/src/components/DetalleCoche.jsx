import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'


export default class DetalleCoche extends Component {

  state = {
    status: false,
    coche: null
  }

  showDetail = () => {
    axios.get(Global.apiCoches + "/api/coches/findcoche/" + this.props.id).then(response => {
      this.setState({
        coche: response.data,
        status: true
      })
    })
  }

  componentDidMount = () => {
    this.showDetail();
  }
  


  render() {
    return (
      <div>
        {
          this.state.coche && 
          (<table className='table table-warning table-hover'>
            <thead className='table table-dark'>
              <tr>
                <th>idCoche</th>
                <th>marca</th>
                <th>modelo</th>
                <th>conductor</th>
                <th>imagen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.id}</td>
                <td>{this.state.coche.marca}</td>
                <td>{this.state.coche.modelo}</td>
                <td>{this.state.coche.conductor}</td>
                <td><img src={this.state.coche.imagen} style={{width:"400px", height:"300px"}} alt={this.state.coche.modelo}/></td>
              </tr>
            </tbody>
          </table>)
        }
      </div>
    )
  }
}
