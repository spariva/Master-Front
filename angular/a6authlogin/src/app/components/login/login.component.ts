import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceLogin } from '../../services/service.login';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public isSignDivVisiable: boolean = true;

  public signUpObj: SignUpModel = new SignUpModel();
  public userLogin!: Login;

  public userName: string = "";
  public password: string = "";

  constructor(private _router: Router, private _service: ServiceLogin) { }


  login(){
    this._service.getToken(this.userName, this.password).subscribe(response => {
        environment.token = response.response;
        environment.isLogged = true;
        console.log(environment.isLogged);
        this._router.navigate(['/empleados']);
      },
    error => {
      environment.isLogged = false;
      Swal.fire({
        icon: "error",
        title: "Contraseña incorrecta",
        text: "Prueba de nuevo o cambie la contraseña"
      });
    })
  }

  // loginAxios(){
  //   this.userLogin = new Login(this.userName, this.password);
  //   this._service.getTokenAxios(this.userLogin).then((response: any) => {
  //     console.log(response);
  //     environment.token = response.response;
  //   })
  // }

  // onLogin() {
  //   // debugger;
  //   const localUsers = localStorage.getItem('angular17users');
  //   if (localUsers != null) {
  //     const users = JSON.parse(localUsers);

  //     const isUserPresent = users.find((user: SignUpModel) => user.email == this.loginObj.email && user.password == this.loginObj.password);
  //     if (isUserPresent != undefined) {
  //       alert("User Found...");
  //       localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
  //       this._router.navigate(['/perfil']);

  //     } else {
  //       alert("No User Found")
  //     }
  //   }
  // }

  onRegister() {
    debugger;
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    }
    alert('Registration Success')
  }

}

export class SignUpModel {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password = ""
  }
}

export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = ""
  }
}
