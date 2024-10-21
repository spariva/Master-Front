import React, { Component } from 'react'

export default class Doctor extends Component {

  render() {
    return (
      <div>
        <ul className='list-group p-1'>
          <li className='list-group-item active'>{this.props.doctor.apellido}</li>
          <li className='list-group-item'>{this.props.doctor.especialidad}</li>
          <li className='list-group-item'>{this.props.doctor.salario}</li>
          <li className='list-group-item'>{this.props.doctor.idHospital}</li>
        </ul>
      </div>
    )
  }
}
