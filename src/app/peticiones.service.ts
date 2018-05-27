import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'; //para peticiones http
import 'rxjs/add/operator/map'; //libreria para mapear la respuesta
import { Observable } from 'rxjs/Observable';//nos permite usar el objeto rxjs

import {HttpClient, HttpHeaders} from '@angular/common/http';//angular 5

@Injectable()
export class PeticionesService {

	public url: string;

	constructor(private _http: HttpClient){
		this.url = "http://app.cambios.pro/json/"
	}

	getArticulos(): Observable<any>{
		return this._http
		.get(this.url);
	}
}