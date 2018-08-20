import { Component, OnInit } from '@angular/core';
import { TipoEleccionModel } from '../../model/tipoEleccion.model';
import { Router} from '@angular/router';
import { CreaTipoEleccionService} from './../../services/crea-tipo-eleccion.service';
import { OK} from './../../model/httpstatus';



@Component({
  selector: 'app-crea-tipo-eleccion',
  templateUrl: './crea-tipo-eleccion.component.html',
  styleUrls: ['./crea-tipo-eleccion.component.scss']
})
export class CreaTipoEleccionComponent implements OnInit {
  private tipoEleccion: TipoEleccionModel;
  private isValid: boolean=true;
  private message: String="";
  constructor(private creaTipoEleccionService: CreaTipoEleccionService
    , private router:Router) { 
      if (sessionStorage.getItem("tipoEleccion")){
        this.tipoEleccion=JSON.parse(sessionStorage.getItem("tipoEleccion"));
      }else{
        this.tipoEleccion= new TipoEleccionModel();
      }
      sessionStorage.clear();
    }

  ngOnInit() {
  }

  public saveOrUpdate(): void{
    this.isValid = this.creaTipoEleccionService.validate(this.tipoEleccion);

    if(this.isValid){
      this.creaTipoEleccionService.saveOrUpdate(this.tipoEleccion).subscribe(res=> {
        if (res.responseCode == OK){
          this.router.navigate(['/tipo-eleccion']);
        }else{
          this.message= res.message;
          this.isValid=false
        }
      });
    }else{
      this.message="Los campos con * son obligatorios";
    }

  }
}


