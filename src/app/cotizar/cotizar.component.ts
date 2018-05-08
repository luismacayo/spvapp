import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css']
})
export class CotizarComponent implements OnInit {

	public mostrar_cotizacion:boolean;	
  constructor() { 
  	this.mostrar_cotizacion = false;

  }

  ngOnInit() {
  }

  seMuestraLaCotizacion(eleccion){
  	this.mostrar_cotizacion = eleccion;
  }

}
