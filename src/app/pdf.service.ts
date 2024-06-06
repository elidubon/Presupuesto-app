import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private datos: any[] = [];

  constructor() {}

  agregarDato(dato: any) {
    this.datos.push(dato);
  }

  obtenerDatos(): any[] {
    return this.datos;
  }
}