import { Pipe, PipeTransform } from "@angular/core";

// decoador que indica que es un pipe
@Pipe({
  name:'mayusculas'
})

export class MayusculasPipe implements PipeTransform {
  transform(valor: string, enMayusculas?:boolean ):string{
      // console.log(valor);
      // console.log(enMayusculas);
      // if (!enMayusculas) {
      //   return valor.toLowerCase();
      // }else{
      //   return valor.toUpperCase()
      // }
      return ( enMayusculas ) 
                    ? valor.toUpperCase() 
                    : valor.toLocaleLowerCase();

  }
}


// PipeTransform : es la función que se ejecuta cuando alguien utilize mi Pipe