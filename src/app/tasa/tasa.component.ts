import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasa',
  templateUrl: './tasa.component.html',
  styleUrls: ['./tasa.component.css']
})
export class TasaComponent implements OnInit {


	public mostrar_tasa:boolean;

  constructor() {
  	this.mostrar_tasa = false;
  }

  ngOnInit() {
  }

  seMuestraLaTasa(eleccion){
  	this.mostrar_tasa = eleccion;
  }

}
