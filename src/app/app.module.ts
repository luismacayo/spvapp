import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';//para poder hacer peticiones http es necesario hacer estos imports
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { TasaComponent } from './tasa/tasa.component';
import { CotizarComponent } from './cotizar/cotizar.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    TasaComponent,
    CotizarComponent,
    CuentasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
