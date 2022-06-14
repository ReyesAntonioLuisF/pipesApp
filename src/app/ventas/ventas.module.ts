import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './paginas/numeros/numeros.component';
import { NoComunesComponent } from './paginas/no-comunes/no-comunes.component';
import { BasicosComponent } from './paginas/basicos/basicos.component';
import { OrdenarComponent } from './paginas/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    MayusculasPipe,
    OrdenarPipe
  ],
  imports: [
    PrimeNgModule,
    CommonModule
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
