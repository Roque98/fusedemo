import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { forEach } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accion } from '../Accion/Accion.type';

@Injectable({
  providedIn: 'root'
})
export class AccionService {

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {}

  handleAccion(acciones: Accion[], datos?: any): any {
    console.log('acciones', acciones);
    forEach(acciones, (accion) => {
      // switch (accion.accionCatalogo.nombre) {
      //   case 'Redirigir':
      //     this.router.navigate([accion.accionCatalogo.parametros.url]);
      //     break;
      //   case 'EjecutarSpParaTabla':
      //     return this.httpClient.post(accion.accionCatalogo.parametros.url, datos);
      //   default:
      //     break;
      // }
    });
  }

  realizarHttp(url: string, datos?: any): void {    
    console.log('url', url);
    console.log('datos', datos);  
    // return this.httpClient.post(url, datos);
  }

    redirigir(accion: Accion) {
      console.log('accion', accion);
      if ('url' in accion.atributosAccion) {
        this.router.navigate([accion.atributosAccion.url]);
      }
    }
}
