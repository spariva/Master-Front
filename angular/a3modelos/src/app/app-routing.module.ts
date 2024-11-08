import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { MenuproductosComponent } from './components/menuproductos/menuproductos.component';
import { PadreCocheComponent } from './components/padre-coche/padre-coche.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';

const routes: Routes = [
  {
    path: "", component: MenuproductosComponent
  },
  {
    path: "producto", component: ListaproductosComponent
  },
  {
    path: "padrecoches", component: PadreCocheComponent
  },
  {
    path: "padredeportes", component: PadreDeportesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
