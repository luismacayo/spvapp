import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';//para poder hacer peticiones http es necesario hacer estos imports
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';//poder usar formularios


import { AppComponent } from './app.component';
import { TasaComponent } from './tasa/tasa.component';
import { CotizarComponent } from './cotizar/cotizar.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConversorPipe } from './pipes/conversor.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TasaComponent,
    CotizarComponent,
    CuentasComponent,
    ContactoComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
