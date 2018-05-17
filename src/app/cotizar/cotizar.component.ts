import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service'


@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css'],
  providers: [PeticionesService]
})
export class CotizarComponent implements OnInit {

	public mostrar_cotizacion:boolean;
  public num_input:number;	
  public datos;

  constructor(
     private _peticionesservice: PeticionesService
    ) { 
  	this.mostrar_cotizacion = false;
    //this.num_input = 0;

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

  seMuestraLaCotizacion(eleccion){
  	this.mostrar_cotizacion = eleccion;
  }

}
