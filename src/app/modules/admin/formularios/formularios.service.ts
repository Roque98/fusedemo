import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Formulario } from './formularios.type';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { RespuestaHttp } from 'app/shared/types/RespuestaHttp.type';


@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  apiUrl = environment.API_URL;
  _data: BehaviorSubject<Formulario> = new BehaviorSubject(null);

  constructor(
    private Http: HttpClient,
  ) { }


  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for data
   */
  get data$(): Observable<Formulario> {
    return this._data.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get all forms
   * @returns Observable<Form[]>
   * @memberof FormService
   * @param id
   * @returns Observable<Form>
   * @memberof FormService
   */
  getFormById(id: string) {
    return this.Http.get<RespuestaHttp>(`${this.apiUrl}/Formulario/${id}`)
    .pipe(
      tap((response) => {
        console.log(response);
        this._data.next(response.data);
      })
    );
  }

  /**
   * 
   */
  enviarJsonDelFormulario(idFormulario: string, json: any){
    console.log(idFormulario);
    console.log(json);
    return this.Http.post(`${this.apiUrl}/Formulario/${idFormulario}`, json)
  }
}
