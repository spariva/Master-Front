import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesComponent } from './components/coches/coches.component';

const routes: Routes = [
  {
    path: "comics", component: LibreriaComponent
  },
  {
    path: "personas", component: PersonasapiComponent
  },
  {
    path: "coches", component: CochesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
