import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoEleccionRoutingModule } from './tipo-eleccion-routing.module';
import { TipoEleccionComponent } from './tipo-eleccion.component';
import { PageHeaderModule } from './../../shared';
import { ModalConfirmComponent } from './../bs-component/components/modal-confirm/modal-confirm.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TipoEleccionRoutingModule,
    PageHeaderModule,
    NgbModule.forRoot()
    
  ],
  declarations: [TipoEleccionComponent,ModalConfirmComponent]
})
export class TipoEleccionModule { }

