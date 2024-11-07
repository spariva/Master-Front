import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { CineComponent } from '../components/cine/cine.component';
import { MusicaComponent } from '../components/musica/musica.component';
import { appRoutingProvider, routing } from './app.routing';
import { MenuComponent } from '../components/menu/menu.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { NumerodobleComponent } from '../components/numerodoble/numerodoble.component';
import { TablamultiplicarroutingComponent } from '../components/tablamultiplicarrouting/tablamultiplicarrouting.component';
import { MenutablacomponentComponent } from '../components/menutablacomponent/menutablacomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CineComponent,
    MusicaComponent,
    MenuComponent,
    NotfoundComponent,
    NumerodobleComponent,
    TablamultiplicarroutingComponent,
    MenutablacomponentComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [
    appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
