import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

nombreLower: string =  'fernando';
nombreUpper: string = 'FERNANDO';
nombreCompleto: string = 'luis fernando';

date: Date = new Date(); //el día de hoy


}
