import { Ingreso } from "./ingreso.model";

export class IngresoServicio{

    ingresos:Ingreso[]=[
        new Ingreso("salario",4000),
        new Ingreso("venta de coche",500),
    ];

    eliminar(ingreso:Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}