import { Injectable } from '@angular/core';
import { Accion } from '../Accion/Accion.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccionSpFormularioService {

  baseUrl = "";

  constructor(private httpClient: HttpClient) { }

  ejecutarSpFormulario(accion: Accion) {
    if ('idFormulario' in accion.atributosAccion && 'dataFormulario' in accion.atributosAccion) {
      const url = `${this.baseUrl}/${accion.atributosAccion.idFormulario}`;
      const dataFormulario = accion.atributosAccion.dataFormulario;
      console.log('url', url);
      console.log('dataFormulario', dataFormulario)
      //this.httpClient.post(`${this.baseUrl}/${accion.atributosAccion.idFormulario}`, accion.atributosAccion.dataFormulario)

    }
  }
}


