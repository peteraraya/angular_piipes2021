import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
// components
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
// Pipes
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    // Componentes
    BasicosComponent,
    OrdenarComponent,
    NoComunesComponent, 
    NumerosComponent,
    // Pipes 
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  exports: [
    BasicosComponent,
    OrdenarComponent,
    NoComunesComponent,
    NumerosComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
