import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreaTipoEleccionRoutingModule } from './crea-tipo-eleccion-routing.module';
import { CreaTipoEleccionComponent } from './crea-tipo-eleccion.component';
import { PageHeaderModule } from './../../shared';


@NgModule({
  imports: [
    CommonModule,
    CreaTipoEleccionRoutingModule,
    PageHeaderModule,
    FormsModule
  ],
  declarations: [ CreaTipoEleccionComponent]
})
export class CreaTipoEleccionModule { }

