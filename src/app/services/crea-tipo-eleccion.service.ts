import { Injectable } from '@angular/core';
import { TipoEleccionModel } from '../model/tipoEleccion.model';
import { Http} from '@angular/http';
import { RestResponse} from './../model/restResponse.model';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreaTipoEleccionService {

  constructor(private http: HttpClient) { }

  public validate(tipoEleccion: TipoEleccionModel): boolean{
    let isValid=true;

    if(!tipoEleccion.nombreTipoEleccion){
      isValid=false;
    }

    return isValid;
  }

  public saveOrUpdate(tipoEleccion: TipoEleccionModel): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate", tipoEleccion);
  }

}
