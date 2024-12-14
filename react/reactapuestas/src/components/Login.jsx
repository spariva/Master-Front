import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import './../css/stylelogin.css';
import Global from './Global';
import axios from 'axios';

export default class LoginInicioComponent extends Component {
    url = Global.urlApiCharlas;

    cajaUser = React.createRef();
    cajaPassword = React.createRef();

    cajaNombre = React.createRef();
    cajaEmail = React.createRef();
    cajaContrasenya = React.createRef();
    cajaRol = React.createRef();

    state = {
        status: false,
        isLogin: false, 
        usuarios: [],
        roles: []
    }

    loadRoles = () => {
        let request = "api/roles";
        axios.get(this.url + request).then(response => {
            console.log(response.data);
            this.setState({
                roles: response.data
            })
        })
    }

    loadUsuarios = () => {
        let request = "api/usuarios";
        axios.get(this.url + request).then(response => {
            this.setState({
                usuarios: response.data
            })
        })
    }

    crearUsuario = (e) => {
        e.preventDefault();

        let request = "api/usuarios";

        let nombre = this.cajaNombre.current.value;
        let email = this.cajaEmail.current.value;
        let contrasenya = this.cajaContrasenya.current.value;
        let rol = parseInt(this.cajaRol.current.value);

        let usernuevo = {
            idUsuario: 1,
            nombre: nombre,
            apellidos: "",
            email: email,
            estadoUsuario: true,
            imagen: "",
            password: contrasenya,
            idRole: rol
        }

        console.log(usernuevo);

        axios.post(this.url + request, usernuevo).then(response => {
            this.setState({
                isLogin: false,  
                status: false    
            })
        })
    }

    crearToken = (e) => {
        e.preventDefault();

        let request = "api/auth/login";

        let user = this.cajaUser.current.value;
        let password = this.cajaPassword.current.value;

        let usertoken = {
            userName: user,
            password: password
        }

        console.log(usertoken);

        axios.post(this.url + request, usertoken).then(response => {
            const token = response.data.response; 
            localStorage.setItem('token', token);
            this.setState({
                status: true,  
                isLogin: true  
            })
        })
    }

    componentDidMount = () => {
        this.loadUsuarios();
        this.loadRoles();
    }

    render() {
        return (
            <div className="main">
                
                {this.state.status === true && <Navigate to="/charlas" />}

                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
                    <form onSubmit={this.crearUsuario}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <select name="role" required ref={this.cajaRol}> 
                            {
                                this.state.roles.map((rol, index) => (
                                    <option key={index} value={rol.idRole}>{rol.roleName}</option> 
                                ))
                            } 
                        </select>
                        <input type="text" name="txt" placeholder="User name" required ref={this.cajaNombre} />
                        <input type="email" name="email" placeholder="Email" required ref={this.cajaEmail} />
                        <input type="password" name="pswd" placeholder="Password" required ref={this.cajaContrasenya} />
                        <button type="submit">Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form onSubmit={this.crearToken}>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required ref={this.cajaUser} />
                        <input type="password" name="pswd" placeholder="Password" required ref={this.cajaPassword} />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}