import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import {TipoEleccionModel} from './../model/tipoEleccion.model'
import {RestResponse} from './../model/restResponse.model'

@Injectable({
  providedIn: 'root'
})
export class TipoEleccionService {

  constructor(private http: HttpClient) { }

  public getTipoElecciones(): Observable<TipoEleccionModel[]>{
    return this.http.get<TipoEleccionModel[]>("http://localhost:8080/getTipoElecciones");
 
   }
   public delete(tipoEleccion: TipoEleccionModel): Observable<RestResponse>{
     return this.http.post<RestResponse>("http://localhost:8080/deleteTipoEleccion",(tipoEleccion));
   }
}
