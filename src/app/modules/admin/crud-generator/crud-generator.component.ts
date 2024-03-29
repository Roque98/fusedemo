import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-generator',
  templateUrl: './crud-generator.component.html',
})
export class CrudGeneratorComponent implements OnInit {

  horizontalStepperForm: FormGroup;
  verticalStepperForm: FormGroup;

  /**
   * Constructor
   */
  constructor(private _formBuilder: FormBuilder)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Horizontal stepper form
      this.horizontalStepperForm = this._formBuilder.group({
          step1: this._formBuilder.group({
              email   : ['', [Validators.required, Validators.email]],
              country : ['', Validators.required],
              language: ['', Validators.required]
          }),
          step2: this._formBuilder.group({
              firstName: ['', Validators.required],
              lastName : ['', Validators.required],
              userName : ['', Validators.required],
              about    : ['']
          }),
          step3: this._formBuilder.group({
              byEmail          : this._formBuilder.group({
                  companyNews     : [true],
                  featuredProducts: [false],
                  messages        : [true]
              }),
              pushNotifications: ['everything', Validators.required]
          })
      });

  }
}
