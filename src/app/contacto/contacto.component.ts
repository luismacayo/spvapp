import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

	public mostrar_contacto:boolean;

  constructor() { 
  	this.mostrar_contacto = false;
  }

  ngOnInit() {
  }

  mostrarInformacionDeContacto(eleccion){
  	this.mostrar_contacto = eleccion;
  }

}
