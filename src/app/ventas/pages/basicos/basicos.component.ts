import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'pedro';
  nombreUpper: string = 'PEDRO';
  nombreCompleto: string = 'PeDrO ArRaYa';
  fecha: Date = new Date(); // día de hoy

}
