import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  //standalone: true,
  //imports: [],
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css'
})
export class EgresoComponent implements OnInit {
  
  egresos:Egreso[]=[];
  @Input() ingresoTotal:number;

  constructor(private egresoServicio:EgresoServicio){

  }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;

  }

  eliminarEgreso(egreso:Egreso){
  this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
