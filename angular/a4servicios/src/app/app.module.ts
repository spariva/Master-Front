import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { LibroComponent } from './components/libro/libro.component';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches/coches.component';
import { ServicePlantillas } from './services/service.plantillas';
import { FuncionComponent } from './components/funcion/funcion.component';
import { PlantillaComplex } from './components/plantillacomplex/plantillacomplex.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    LibroComponent,
    PersonasapiComponent,
    MenuComponent,
    CochesComponent,
    FuncionComponent,
    PlantillaComplex
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceComics, ServicePersonas, ServiceCoches, ServicePlantillas, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
