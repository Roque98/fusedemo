import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Formulario } from './formularios.type';
import { BehaviorSubject, Observable, tap } from 'rxjs';

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
    return this.Http.get<Formulario>(`${this.apiUrl}/Formulario/${id}`)
    .pipe(
      tap((response) => {
        this._data.next(response);
      })
    );
  }

  /**
   * 
   */
  enviarJsonDelFormulario(idFormulario: string, json: any){
    return this.Http.post(`${this.apiUrl}/Formulario/${idFormulario}`, json)
  }
}
