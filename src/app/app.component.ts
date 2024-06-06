import { Component,ElementRef, ViewChild } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';
import { EgresoServicio } from './egreso/egreso.service';

//pdf
//import jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';
import { DatosService } from './pdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'presupuesto-app';
  @ViewChild('pdfContent') pdfContent!: ElementRef;

  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  datos: any[] = [];

    // Datos de ejemplo

  constructor (private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio,  private datosService: DatosService){
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
    this.datos = this.datosService.obtenerDatos(); // Obtener los datos del servicio

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

  /*
  downloadPDF(){
    this.datos = this.datosService.obtenerDatos();
    console.warn('ddd',this.datos);
    const jsonData = JSON.stringify(this.datos);
    console.log(jsonData);

  }
  

/*
  downloadPDF() {
    // Convertir los datos a formato JSON
    const jsonData = JSON.stringify(this.inputData);

    // Lógica para exportar o guardar la cadena JSON
    // Por ejemplo, puedes imprimirlo en la consola
    console.log(jsonData);
    // O puedes enviarlo a un servicio backend para su almacenamiento o descarga
    // this.backendService.guardarDatos(jsonData);
  }
  */
  downloadPDF(){
    this.datos = this.datosService.obtenerDatos();
    const options = {
      filename: 'sample.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {},
      jsPDF: { orientation: 'portrait' }
    };

    const content = this.generatePDFContent(); // Generar el contenido HTML
       
    html2pdf()
      .from(content)
      .set(options)
      .save();
  }
  generatePDFContent(){
    const container = document.createElement('div');

      // Título del documento
    const title = document.createElement('h1');
    title.textContent = 'Mi presupuesto'; // Texto del título
    title.style.textAlign = 'center'; // Alineación del título
    title.style.marginBottom = '10mm'; // Espacio después del título
    
    container.appendChild(title); // Agregar el título al contenedor
    // Crear tabla para mostrar los datos
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse'; // Añadir borde entre celdas
    table.style.width = '90%'; // Establecer el ancho de la tabla al 100% del contenedor
    table.style.marginTop = '10mm'; // Agregar un margen superior de 10 milímetros
    table.style.marginLeft = '10mm'; // Agregar un margen izquierdo de 10 milímetros
    table.style.marginRight = '10mm'; // Agregar un margen derecho de 10 milímetros
    //table.style.marginBottom = '10mm'; // Agregar un margen inferior de 10 milímetros
    const headerRow = table.insertRow(0);
    const headers = ['Nombre', 'Valor'];

    headerRow.style.borderBottom = '2px solid #000';// Añadir borde inferior a los encabezados

    // Agregar encabezados a la tabla
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      th.style.border = '1px solid #000'; // Añadir borde a las celdas de encabezado
      th.style.padding = '8px'; // Añadir relleno a las celdas de encabezado
      headerRow.appendChild(th);
    });

    // Agregar datos a la tabla
    this.datos.forEach(rowData => {
      const row = table.insertRow();
      Object.values(rowData).forEach(text => {
        const cell = row.insertCell();
        cell.textContent = text.toString();
        cell.style.border = '1px solid #000'; // Añadir borde a las celdas de datos
        cell.style.padding = '8px'; // Añadir relleno a las celdas de datos
      });
    });

    // Agregar la tabla al contenedor
    container.appendChild(table);

    return container;
  }
}
