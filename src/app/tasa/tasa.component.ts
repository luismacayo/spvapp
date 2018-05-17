import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service'

@Component({
  selector: 'app-tasa',
  templateUrl: './tasa.component.html',
  styleUrls: ['./tasa.component.css'],
  providers: [PeticionesService]
})
export class TasaComponent implements OnInit {


	public mostrar_tasa:boolean;
  public datos;

  constructor(
    private _peticionesservice: PeticionesService
  ) {
  	this.mostrar_tasa = false;
  }

  ngOnInit() {
    //console.log(this._peticionesservice.getPrueba());
    this._peticionesservice.getArticulos().subscribe(//se inicia la peticion al llamar al metodo subscribe()
          //recibe la respuesta
      result => {
        this.datos = result;
        if(!this.datos){
          console.log('Error en el servidor');
        }
        console.log(result);
      },
          //recibe el error
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }   
    );
  }

  seMuestraLaTasa(eleccion){
  	this.mostrar_tasa = eleccion;
  }

}
