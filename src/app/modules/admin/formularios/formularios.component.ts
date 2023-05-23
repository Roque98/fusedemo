import { Component, OnInit } from '@angular/core';
import { FormulariosService } from './formularios.service';
import { Formulario, NombreInputValor } from './formularios.type';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
})
export class FormulariosComponent implements OnInit {

  data: Formulario;
  cargando = true;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  formGroup: FormGroup = new FormGroup({});

  constructor(
    private formulariosService: FormulariosService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activeRoute.params
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((params) => {
        if (params.id) {
          this.formulariosService.getFormById(params.id)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((response) => {
              this.data = response;
              this.formGroup = this.construirFormGroup(response);
              this.formGroup.clearValidators(); 
              this.cargando = false;
              console.log(this.data);
              console.log(this.formGroup);
            });
        }
      });


  }

  getFormValues(): NombreInputValor[] {
    const obj: NombreInputValor[] = [];

    this.data.grupos.forEach(grupo => {
      grupo.componentes.forEach(input => {
        obj.push({ nombreInput: input.nombrePropiedad, valorInput: input.valorInput });
      });
    });

    return obj;
  }

  enviarFormuario(): void {
    console.log(this.formGroup.value);
  }


  construirFormGroup(formulario: Formulario): FormGroup {
    const formGroup = new FormGroup({});
    
    formulario.grupos.forEach(grupo => {
      grupo.componentes.forEach(input => {
        const attributeName = input.nombrePropiedad;
        const formControl = new FormControl();
        
        formControl.setValue(input.valorInput);
        
        const validators:ValidatorFn[] = [];
        
        // Validacion input requerido
        if(input.requeridoInput){
          validators.push(Validators.required);
        }

        // Validacion pattern
        if(input.patronInput){
          validators.push(Validators.pattern(input.patronInput));
        }

        formControl.setValidators(validators);

        formGroup.addControl(attributeName, formControl);
      });
    });
    return formGroup;
  }

  // Obtner error de un formControl
  getError(formControlName: string): string {
    const formControl = this.formGroup.get(formControlName);
    if (formControl.hasError('required')) {
      return 'Campo requerido';
    }
    if (formControl.hasError('email')) {
      return 'Email invalido';
    }
    if (formControl.hasError('minlength')) {
      return 'Minimo de caracteres';
    }
    if (formControl.hasError('maxlength')) {
      return 'Maximo de caracteres';
    }
    if (formControl.hasError('min')) {
      return 'Valor minimo';
    }
    if (formControl.hasError('max')) {
      return 'Valor maximo';
    }
    if (formControl.hasError('pattern')) {
      return this.getMensajeErrorPatrinInput(formControlName);
    }
    return '';
  }

  // obtener si un formControl es invalido
  getInvalid(formControlName: string): boolean {
    const formControl = this.formGroup.get(formControlName);
    return formControl.invalid;
  }

  // Obtner si el formularios es invalido
  getFormInvalid(): boolean {
    return this.formGroup.invalid;
  }

  // Obtener la propiedad mensajeErrorPatrinInput del objeto data
  // Se debe buscar el componente en todos los grupos del formulario
  getMensajeErrorPatrinInput(nombrePropiedad: string): string {
    const componentes = this.data.grupos.map(grupo => grupo.componentes);
    const input = componentes.find(componente => componente.find(input => input.nombrePropiedad === nombrePropiedad));
    return input[0].mensajeErrorPatrinInput || '';
  }
}
