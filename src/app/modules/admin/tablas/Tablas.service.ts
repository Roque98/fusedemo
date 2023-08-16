import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ITabla, ITablaAcciones } from './tablas.dto';

@Injectable({
  providedIn: 'root'
})
export class TablasService {

  apiUrl = environment.API_URL;

  constructor(
    private httpClient: HttpClient
  ) { }

  getTablaBydId(id: string) {
    return this.httpClient.get<ITabla>(`${this.apiUrl}/tablas/${id}`);
  }

  executeSpAccion(accion: ITablaAcciones, body: any) {
    console.log('body', body);
    
    return this.httpClient.post(`${this.apiUrl}/tablas/${accion.id}/execute`, body);
  }
}
