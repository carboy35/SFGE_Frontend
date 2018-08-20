import { Component, OnInit } from '@angular/core';
import { TipoEleccionService} from './../../services/tipo-eleccion.service'
import { TipoEleccionModel } from '../../model/tipoEleccion.model';
import { Router } from '@angular/router';
import { OK} from './../../model/httpstatus';
import { ModalComponent } from './../bs-component/components/modal/modal.component'
//import { RestResponse} from './../../model/restResponse.model'

@Component({
  selector: 'app-tipo-eleccion',
  templateUrl: './tipo-eleccion.component.html',
  styleUrls: ['./tipo-eleccion.component.scss']
})
export class TipoEleccionComponent implements OnInit {
  name: TipoEleccionModel;
  private tipoElecciones: Array<TipoEleccionModel>;
  private message: String= "";

  constructor(private tipoEleccionService: TipoEleccionService, private router: Router) { }
 
  ngOnInit() {
    this.cargaTipoEleccion();
  }
  private cargaTipoEleccion():void{
    // console.log(this.tipoEleccionService.getTipoElecciones());
    this.tipoEleccionService.getTipoElecciones().subscribe(res => {
      this.tipoElecciones= res;

    });
    }

    
  public edit(tipoEleccion: TipoEleccionModel): void{
    sessionStorage.setItem('tipoEleccion', JSON.stringify(tipoEleccion));
    this.router.navigate(['/crea-tipo-eleccion']);
  }

  public delete(name): void{
    this.tipoEleccionService.delete(name).subscribe(res => {
      if (res.responseCode == OK) {
        this.router.navigate(['/crea-tipo-eleccion']);
      }else{
        this.message=res.message;
      }
    });
    window.location.reload();
  }

  public seteaItem(item): void{
    this.name=item;
   }

}
