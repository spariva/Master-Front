import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { LibroComponent } from './components/libro/libro.component';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';
import { HttpClientModule } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    LibroComponent,
    PersonasapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceComics, ServicePersonas],
  bootstrap: [AppComponent]
})
export class AppModule { }
