import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';
import { EgresoServicio } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'presupuesto-app';

  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  constructor (private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio){
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;

  }

  getIngresoTotal(){
    let ingresoTotal:number=0;
    this.ingresos.forEach(Ingreso => {
      ingresoTotal += Ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number=0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentageTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTltal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
