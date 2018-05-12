import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'; //para peticiones http
import 'rxjs/add/operator/map'; //libreria para mapear la respuesta
import { Observable } from 'rxjs/Observable';//nos permite usar el objeto rxjs

import {HttpClient, HttpHeaders} from '@angular/common/http';//angular 5

@Injectable()
export class PeticionesService {

	public url: string;

	constructor(private _http: HttpClient){
		//this.url = "https://jsonplaceholder.typicode.com/posts";//url para peticiones post
		//this.url = "https://gsmproxy.com/json/tasa.json"
		//this.url = "http://localhost/pagina-simple/src/assets/index.php";
		//this.url = "http://localhost/pagina-simple/src/assets/tasa.json";
		this.url = "/json/tasa.json"
	}

	getPrueba(){
		return 'Hola mundo desde PeticionesService';
	}

	/*getArticulos(){
		console.log('estoy en getArticulos()');
		return this._http
		.get(this.url)
		.map( res => res.json());//.map( res => res.json()); //con map capturamos la respuesta y la convertimos a objeto json utilizable por javascript
	}*/
	getArticulos(): Observable<any>{
		return this._http
		.get(this.url);
	}
}