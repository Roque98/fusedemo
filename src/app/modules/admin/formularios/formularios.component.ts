import { Component, OnInit } from '@angular/core';
import { FormulariosService } from './formularios.service';
import { Formulario, NombreInputValor } from './formularios.type';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
})
export class FormulariosComponent implements OnInit {

  data: Formulario;
  cargando = true;

  constructor(
    private formulariosService: FormulariosService,
  ) { }

  ngOnInit(): void {
    this.formulariosService.getFormById('1').subscribe((response) => {
      this.data = response;
      this.cargando = false;
      console.log(this.data);
    });
  }

  getFormValues(): NombreInputValor[] {
    const obj: NombreInputValor[] = [];

    this.data.grupos.forEach(grupo => {
      grupo.componentes.forEach(input => {
        obj.push({ nombreInput: input.nombreInput, valorInput: input.valorInput });
      });
    });

    return obj;
  }

  enviarFormuario(): void {
    console.log(this.getFormValues());
  }
}
