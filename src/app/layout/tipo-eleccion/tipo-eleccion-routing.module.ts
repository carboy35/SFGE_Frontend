import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoEleccionComponent } from './tipo-eleccion.component';

const routes: Routes = [
  {
      path: '', component: TipoEleccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)  ],
  exports: [RouterModule]
})
export class TipoEleccionRoutingModule { }




