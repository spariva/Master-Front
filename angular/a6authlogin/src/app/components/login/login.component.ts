import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceLogin } from '../../services/service.login';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public isSignDivVisiable: boolean = true;

  public signUpObj: SignUpModel = new SignUpModel();
  public loginObj: LoginModel = new LoginModel();

  public userName: string = "";
  public password: string = "";

  constructor(private _router: Router, private _service: ServiceLogin) { }


  login(){
    this._service.getToken(this.userName, this.password).subscribe(response => {

        environment.token = response.response;
        this._router.navigate(['/empleados']);
      },
    error => {
      alert("Usuario o contraseña incorrecta");
    })
  }

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
