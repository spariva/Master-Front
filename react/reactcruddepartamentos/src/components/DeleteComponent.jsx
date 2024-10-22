import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default class DeleteComponent extends Component {
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
                let id = this.props.id;
                let url = Global.apiDepartamentos + "api/departamentos/" + id;
                axios.delete(url, id).then(response => {
                    console.log("eliminando");
                    this.setState(
                        {
                            status: true
                        }
                    )
                })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    componentDidMount = () => {
        this.delete();
    }

    render() {
        return (
            <div>
                {
                    this.state.status === true &&
                    (<Navigate to="/" />)
                }
                <Navigate to="/" />
            </div>
        )
    }
}
