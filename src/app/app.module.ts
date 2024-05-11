import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngresoServicio } from './ingreso/ingreso.service';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EgresoServicio } from './egreso/egreso.service';

@NgModule({
    declarations: [
        AppComponent,
        //CabeceroComponent,
        //IngresoComponent,
        //EgresoComponent,
        //FormularioComponent
    ],
    providers: [IngresoServicio, EgresoServicio],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CabeceroComponent,
        FormularioComponent,
        IngresoComponent,
        EgresoComponent
    ]
})
export class AppModule { }
