import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BodySelect, Crud, RespuestaHttp } from './crud.type';

@Injectable({
  providedIn: 'root'
})
export class CrudsService {

  _data: BehaviorSubject<any[]> = new BehaviorSubject(null);
  apiUrl = environment.API_URL;

  /**
    * Constructor
    */
  constructor(
    private Http: HttpClient
  ) { }


  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for data
   */

   get data$(): Observable<any[]> {
    return this._data.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get crud by id
   * @returns Observable<Crud[]>
  */
   getData(idCrud: string) {
    return this.Http.get<RespuestaHttp>(`${this.apiUrl}/crud/${idCrud}`).pipe(
      tap((response) => {
        this._data.next(response.result);
      })
    );
  }

  /**
   * Get results
   * 
  */

   makeSelect(idCrud: string, bodySelect: BodySelect) {
    return this.Http.post<RespuestaHttp>(`${this.apiUrl}/crud/ExecuteSelectQuery/${idCrud}`, bodySelect);
  }
}
