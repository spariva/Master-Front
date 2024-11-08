import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { LibroComponent } from './components/libro/libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
