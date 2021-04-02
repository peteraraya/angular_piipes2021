import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipes';

  nombre:string = 'Pedro aRaYa';

  valor: number = 1000;

  obj = {
    nombre: 'Pedro Araya Gálvez'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }

  constructor(private primengConfig: PrimeNGConfig){ }

  ngOnInit(){
    // burbujas
    this.primengConfig.ripple = true;
  }
}


// los pipes no modifican la data 