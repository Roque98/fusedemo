import { Component, Input, OnInit } from '@angular/core';
import { Boton, TipoBoton } from 'app/shared/componentes/boton/Boton.type';
import { AccionService } from 'app/modules/admin/formularios/Accion.service';
import { forEach } from 'lodash';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  @Input() boton: Boton;
  @Input() tipoBoton: TipoBoton= TipoBoton.BotonHeader;
  
  botonHeader = TipoBoton.BotonHeader;
  botonSubmit = TipoBoton.BotonSubmit;

  constructor(
    public accionService: AccionService
  ) { }

  ngOnInit() {
  }

  handleAccion() {
    forEach(this.boton.acciones, (accion) => {
      console.log(accion);

      switch (accion.id) {
        case 1:
          this.accionService.redirigir(accion);
          break;
        case 2:
          this.accionService.ejecutarSpFormulario(accion);
        default:
          
          break;
      }

      // console.log(this.datos);
      // switch (accion.accionCatalogo.nombre) {
      //   case 'Redirigir':
      //     this.accionService.redirigir(accion);
      //     break;
      //   case 'EjecutarSpParaTabla':
      //     this.accionService.realizarHttp(accion.accionCatalogo.parametros.sp, this.datos)
      //     // .subscribe({
      //     //   next: (response) => {
      //     //     console.log(response);
      //     //   },
      //     //   error: (error) => {
      //     //     console.log(error);
      //     //   },
      //     //   complete: () => {
      //     //     console.log('complete');
      //     //   }
      //     // });
      //   default:
      //     break;
      // }
    });

  }

}
