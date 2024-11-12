import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

const routes: Routes = [
  { path:"" , component: HomeComponent},
  { path:"login" , component: LoginComponent},
  { path:"perfil" , component: PerfilComponent},
  { path:"empleados" , component: EmpleadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
