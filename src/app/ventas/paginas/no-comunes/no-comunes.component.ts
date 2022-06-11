import { Component} from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
  nombre: string = 'Fernando';
  genero: string =  'masculino';
  //i18nselect
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  } 

  //i18nPlural
  clientes: string[] = ['Maria','Juan','Silvia','Diego'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiar(){
    if(this.genero === 'femenino'){
      this.nombre = 'Fernando';
      this.genero = 'masculino';
    }else{
      this.nombre = 'Maria';
      this.genero = 'femenino';
    }
  }

  eliminar(){
    this.clientes.shift();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direcion: 'Otawa, Canadá'
  }

  heroes = [{
    nombre: 'super man',
    vuela: true
  },{
    nombre: 'Acua man',
    vuela: false
  },{
    nombre: 'Bat man',
    vuela: false,
  }]

  //Async Pipe

  miObservable = interval(1000);

  miPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500)
  })

}
