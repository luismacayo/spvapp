import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-tasa',
  templateUrl: './tasa.component.html',
  styleUrls: ['./tasa.component.css'],
  providers: [PeticionesService]
})


export class TasaComponent implements OnInit {


  public datos;
  public mostrar_tasa:boolean;
  public mostrar_cuentas:boolean;
  public faq_view:boolean;
  public contact_view:boolean;
  public calc_view:boolean;

  constructor(private _peticionesservice: PeticionesService) {
    this.mostrar_tasa = false;
    this.mostrar_cuentas = false;
    this.faq_view = false;
    this.contact_view = false;
    this.calc_view = false;
  }

  ngOnInit() {
    this._peticionesservice.getArticulos().subscribe(
      result => {
        this.datos = result;
        if(!this.datos){
          console.log('Error en el servidor');
        }
        console.log(result);
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }   
    );
  }

  seMuestraLaTasa(eleccion){
  	this.mostrar_tasa = eleccion;
  }

  toggleCuentas(eleccion){
    this.mostrar_cuentas = eleccion;
  }

  toggleFaq(eleccion){
    this.faq_view = eleccion;
  }

  toggleContact(eleccion){
    this.contact_view = eleccion;
  }

  toggleCalc(eleccion){
    this.calc_view = eleccion;
  }

}
