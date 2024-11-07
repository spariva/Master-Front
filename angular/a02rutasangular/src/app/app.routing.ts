import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "../components/home/home.component";
import { CineComponent } from "../components/cine/cine.component";
import { MusicaComponent } from "../components/musica/musica.component";
import { NotfoundComponent } from "../components/notfound/notfound.component";
import { NumerodobleComponent } from "../components/numerodoble/numerodoble.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent},
    { path: "cine", component: CineComponent},
    { path: "musica", component: MusicaComponent},
    { path: "numerodoble", component: NumerodobleComponent},
    { path: "numerodoble/:numero", component: NumerodobleComponent},
    { path: "**", component: NotfoundComponent},
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);