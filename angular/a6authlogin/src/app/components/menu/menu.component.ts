import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  public isLogged: boolean;

  constructor() {
    this.isLogged = false;
  }

  ngOnInit(): void {
    this.isLogged = environment.isLogged;
  }
}
