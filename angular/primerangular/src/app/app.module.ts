import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A2HooksComponent } from '../components/a2hookscomponent/a2hookscomponent';
import { A3DeportesComponent } from '../components/a3deportes/a3deportes.component';
import { A4FormsBindingComponent } from '../components/a4formsbinding/formsbinding.component';
import { A4FormsReference } from '../components/a4formsreference/a4formsreference.component';
import { A5tablamultiplicarComponent } from '../components/a5tablamultiplicar/a5tablamultiplicar.component';

@NgModule({
  declarations: [
    AppComponent,
    A2HooksComponent,
    A3DeportesComponent,
    A4FormsBindingComponent,
    A4FormsReference,
    A5tablamultiplicarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
