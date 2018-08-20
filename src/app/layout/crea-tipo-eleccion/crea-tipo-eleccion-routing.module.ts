import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreaTipoEleccionComponent} from './crea-tipo-eleccion.component'

const routes: Routes = [
{
  path: '', component: CreaTipoEleccionComponent
}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreaTipoEleccionRoutingModule { }
