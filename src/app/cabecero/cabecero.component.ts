import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {

  @Input() presupuestoTotal:number;
  @Input() ingresoTotal:number;
  @Input() egresoTotal:number;
  @Input() porcentajeTotal:number;

  constructor (){

  }

  ngOnInit(){

  };
}
