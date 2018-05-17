import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor'})

export class ConversorPipe implements PipeTransform{
	transform(valor, por){
		let value_one = parseFloat (valor);
		let value_two = parseFloat (por);

		let result = (value_one * value_two);
		return result;
	}
}
//despues de crear un pipe tenemos que importarlo en el app.module.ts