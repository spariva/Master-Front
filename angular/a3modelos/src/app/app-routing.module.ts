import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';

const routes: Routes = [
  {
    path: "producto", component: ListaproductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
