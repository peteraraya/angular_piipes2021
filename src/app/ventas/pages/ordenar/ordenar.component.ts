import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayusculas : boolean = true;
  ordenarPor : string = '';


  heroes: Heroe[] =[
    {
      nombre: 'Super Man',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]

  cambiar(){
    // TOOGLE
   this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor:string ){
    console.log(valor);
    this.ordenarPor = valor;
  }

}
