import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


export default class HomeCoches extends Component {
    state = {
        status: false,
        coches: []
    }

    loadcoches = () => {
        let request = "api/coches";
        let url = Global.apiCoches + request;

        axios.get(url).then(response => {
            this.setState({
                coches: response.data,
                status: true
            })
        })
    }



    componentDidMount = () => {
        this.loadcoches();
    }

    componentDidUpdate = (oldProps) => {
      if(this.props != oldProps){
        this.loadcoches();
      }
    }

  render() {
    return (
      <div>
        <h2>home</h2>
        <table className='table table-warning table-hover'>
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
                  {
                    this.state.coches.map((coche, index) => {
                      return (<tr key={index}>
                        <td>{coche.idCoche}</td>
                        <td>{coche.marca}</td>
                        <td>{coche.modelo}</td>
                        <td>{coche.conductor}</td>
                        <td><img src={coche.imagen} alt={coche.modelo} style={{width:'250px'}}/></td>
                        {/* <td>
                            <NavLink to={"/modelo/" + coche.idCoche} className="btn btn-success">modelo</NavLink>
                        </td>
                        <td><NavLink to={"/update/" + coche.idCoche + "/" + coche.marca + "/" + coche.modelo} className="btn btn-info">Update</NavLink>
                        </td>
                        <td><NavLink to={"/delete/" + coche.idCoche } className="btn btn-danger">Delete</NavLink>
                        </td>
                        <td><button className='btn btn-danger' onClick={()=> {this.deletecoche(coche.idCoche)}}>Borrar</button></td> */}
                      </tr>)
                    })
                  }
                </tbody>
               </table>
      </div>
    )
  }
}
