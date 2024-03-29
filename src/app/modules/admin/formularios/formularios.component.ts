import { Component, OnInit } from '@angular/core';
import { FormulariosService } from './formularios.service';
import { Formulario } from './formularios.type';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AccionService } from './Accion.service';
import { Boton, TipoBoton } from 'app/shared/componentes/boton/Boton.type';
import { ParametroSp } from '../AccionSpFormulario/AccionSpFormulario.type';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
})
export class FormulariosComponent implements OnInit {

  // unsubscribe
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  // data from api
  data: Formulario;

  // idFormulario
  idFormulario: string;

  // loading
  cargando = true;

  // form group
  formGroup: UntypedFormGroup = new UntypedFormGroup({});

  // tipos de botones
  BotonSubmit = TipoBoton.BotonSubmit;

  constructor(
    private formulariosService: FormulariosService,
    private activeRoute: ActivatedRoute,
    private accionService: AccionService
  ) { }

  ngOnInit(): void {
    // Get form by id
    this.activeRoute.params
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe((params) => {
          if (params.id) {
            this.idFormulario = params.id;

            this.formulariosService.getFormById(params.id)
              .pipe(takeUntil(this._unsubscribeAll))
              .subscribe((response) => {
                this.data = response.data as Formulario;
                this.formGroup = this.construirFormGroup(this.data);
                this.formGroup.clearValidators();
                this.cargando = false;
                // set false to hide password input
                this.data.grupos.forEach(grupo => {
                  grupo.componentes.forEach(input => {
                    input.hidePassword = true;
                  });
                });
              });
          }
        });
  }

  getBotonFormulario(boton: Boton){
    // Agregar data del formulario a la accion de tipo 2 del boton
    let botonWithFormData = boton.acciones.forEach(accion => {
      if(accion.id === 2){
        if( 'idFormulario' in accion.atributosAccion ){
          accion.atributosAccion.dataFormulario = this.formGroup.value;
        }
      }
    });

    console.log('botonWithFormData', botonWithFormData);
    return boton; 
  }


  // getFormValues(): ParametroSp[] {
  //   const obj: ParametroSp[] = [];

  //   this.data.grupos.forEach(grupo => {
  //     grupo.componentes.forEach(input => {
  //       obj.push({ nombreParametro: input.nombrePropiedad, valorParametro: input.valorInput });
  //     });
  //   });

  //   return obj;
  // }

  // enviarFormulario(): void {

  //   // Set form values
  //   let formValues = this.formGroup.value;

  //   // if input type is date from formValues convert to string dd/mm/yyyy
  //   this.data.grupos.forEach(grupo => {
  //     grupo.componentes.forEach(input => {
  //       if (input.tipoInput === 5) {
  //         formValues[input.nombrePropiedad] = input.valorDateInput.toLocaleDateString();
  //       }
  //     });
  //   });

  //   this.formulariosService.enviarJsonDelFormulario(this.idFormulario, formValues)
  //     .pipe(takeUntil(this._unsubscribeAll))
  //     .subscribe({
  //       next: (response)=>{
  //         console.log('Exito', response)
  //       }, 
  //       error: (err)=>{
  //         console.log('Error' ,err)
  //       },
  //       complete: ()=>{

  //       }
  //     })
  // }


  construirFormGroup(formulario: Formulario): UntypedFormGroup {
    const formGroup = new UntypedFormGroup({});

    formulario.grupos.forEach(grupo => {
      grupo.componentes.forEach(input => {
        const attributeName = input.nombrePropiedad;
        const formControl = new UntypedFormControl();
        formControl.setValue(input.valorInput);

        // Set default date
        if (input.tipoInput === 5 && input.valorInput === null) {
          input.valorDateInput = new Date();
          formControl.setValue(input.valorDateInput);
        }

        // Try convert string to date o set default date
        if (input.tipoInput === 5 && input.valorInput !== null) {
          try {
            input.valorDateInput = new Date(input.valorInput);
            formControl.setValue(input.valorDateInput);
          } catch (error) {
            input.valorDateInput = new Date();
          }
        }



        const validators: ValidatorFn[] = [];

        // Validacion input requerido
        if (input.requeridoInput) {
          validators.push(Validators.required);
        }

        // Validacion pattern
        if (input.patronInput) {
          validators.push(Validators.pattern(input.patronInput));
        }



        // Set validators
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
