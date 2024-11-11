import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesComponent } from './components/coches/coches.component';
import { FuncionComponent } from './components/funcion/funcion.component';
import { PlantillaComplex } from './components/plantillacomplex/plantillacomplex.component';

const routes: Routes = [
  {
    path: "comics", component: LibreriaComponent
  },
  {
    path: "personas", component: PersonasapiComponent
  },
  {
    path: "coches", component: CochesComponent
  },
  {
    path: "funcion/:f", component: FuncionComponent
  },
  {
    path: "plantillas", component: PlantillaComplex
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
