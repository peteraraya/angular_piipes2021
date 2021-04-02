import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Pedro';
  genero: string = 'masculino';
  // mapa para ver como queremos que trabaje
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla',
  }


  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Laly','Danae','Agustina'];
  //mapa 
  clienteMapa={
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando',

  }

  cambiarCliente(){
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente(){
    // console.log('borra');
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre : 'Pedro',
    edad: 34,
    direccion: 'Antoni gaudi 1128'
  }

  // Json Pipe
  heroes = [
    {
      nombres: 'SuperMan',
      vuela: true
    },
    {
      nombres: 'Aquaman',
      vuela: false
    },
    {
      nombres: 'Spiderman',
      vuela: false
    },
  ]

  // Async Pipe
  // utilizado co observable con intervL DE RXJS
  miObservable = interval(1000); // 012345


  // Promesa
  valorPromesa = new Promise ( (resolve, reject) =>{

      setTimeout(() => {
        resolve('tenemos data de una promesa')
      }, 3500);

    });

  }



// el operador tap() se dispara dos veces por cada emisión
