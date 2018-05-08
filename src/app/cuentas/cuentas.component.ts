import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

	public mostrar_cuentas:boolean;

  constructor() { 
  	this.mostrar_cuentas = false;
  }

  ngOnInit() {
  }

  seMuestranLasCuentas(eleccion){
  	this.mostrar_cuentas = eleccion;
  }

}
