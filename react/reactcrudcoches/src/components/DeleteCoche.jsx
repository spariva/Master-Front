import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default class DeleteCoche extends Component {
  state = {
    status: false
  }

  delete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        let url = Global.apiCoches + "api/coches/deletecoche/" + this.props.id;
        axios.delete(url).then(response => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          this.setState({
            status: true
          })
        })
      } else {
        this.setState({
          status: true
        })
      }
    });
  }

  componentDidMount = () => {
    this.delete();
  }

  render() {
    // if (this.state.redirect) {
    //   return <Navigate to="/" />;
    // }
    return (
      <div>
        {
          this.state.status === true &&
          (<Navigate to="/" />)
        }
      </div>
    )
  }
}
