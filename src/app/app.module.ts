import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngresoServicio } from './ingreso/ingreso.service';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EgresoServicio } from './egreso/egreso.service';
import { FormsModule } from '@angular/forms';

import { DatosService } from './pdf.service';

@NgModule({
    declarations: [
        AppComponent,
        IngresoComponent,
        CabeceroComponent,     
        EgresoComponent,
        FormularioComponent
    ],
    providers: [IngresoServicio, EgresoServicio,DatosService],
    bootstrap: [AppComponent],
    imports: [
        FormsModule,
        BrowserModule,
        //CabeceroComponent,
        //FormularioComponent,
        //IngresoComponent,
        //EgresoComponent
    ]
})
export class AppModule { }
