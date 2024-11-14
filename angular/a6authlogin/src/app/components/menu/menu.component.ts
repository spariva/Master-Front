import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private _router: Router) { }

  get isLogin(): boolean {
    return environment.isLogged;
  }

  logout() {
    environment.isLogged = false;
    this._router.navigate(['/login']);
  }
}
