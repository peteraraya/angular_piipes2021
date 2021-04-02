import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'vuela'
})

export class VuelaPipe implements PipeTransform{

  transform( valor:boolean){
      // console.log(valor);

      return (valor) ? 'vuela' : 'no vuela';
  }
}