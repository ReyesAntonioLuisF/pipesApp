import { Component} from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent  {

  enMayusculas: boolean = true;
  heroes: Heroe[] = [{
    nombre: 'Super Man',
    vuela: true,
    color: Color.azul,
  },{
    nombre: 'Bat Man',
    vuela: false,
    color: Color.negro
  },{
    nombre: 'Spider Man',
    vuela: false,
    color: Color.rojo
  }]

  ordenarPor: string = 'nombre';

  cambiarValorMayuscula(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string){
    console.log(valor);
    this.ordenarPor = valor;
  }
}
