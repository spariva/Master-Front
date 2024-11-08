import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { MenuproductosComponent } from './components/menuproductos/menuproductos.component';
import { HijoCocheComponent } from './components/hijo-coche/hijo-coche.component';
import { PadreCocheComponent } from './components/padre-coche/padre-coche.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';
import { HijoDeporteComponent } from './components/hijo-deporte/hijo-deporte.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    MenuproductosComponent,
    HijoCocheComponent,
    PadreCocheComponent,
    PadreDeportesComponent,
    HijoDeporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
