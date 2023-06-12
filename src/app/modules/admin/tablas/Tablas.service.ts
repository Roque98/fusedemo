import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ITabla } from './tablas.dto';

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

}
