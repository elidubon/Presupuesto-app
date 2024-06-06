import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.service';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

//
import { DatosService } from '../pdf.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  tipo:string ="ingresoOperacion";
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio, private datosService: DatosService){}

  ngOnInit(): void {
    
  }



  tipoOperacion(evento){
  this.tipo = evento.target.value;
  }

  agregarValor(){
    console.warn("geee");
    if(this.tipo === "ingresoOperacion"){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput,this.valorInput));
      console.warn('mas',this.descripcionInput,this.valorInput);
      //
    }else{
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput,this.valorInput));
      console.warn('menos',this.descripcionInput,this.valorInput);
      //this.resetform();
    }

    const nuevoDato = { descripcion: this.descripcionInput, valor: this.valorInput };
    console.warn('wwwwww',this.descripcionInput,this.valorInput );
    this.datosService.agregarDato(nuevoDato); // Guardar el nuevo dato en el servicio
    this.resetform();
  }

  private resetform(){
    this.descripcionInput = '';
    this.valorInput=null;
  }
}
