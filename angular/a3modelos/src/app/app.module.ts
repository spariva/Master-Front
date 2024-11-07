import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { MenuproductosComponent } from './components/menuproductos/menuproductos.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    MenuproductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
