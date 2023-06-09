import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudGeneratorRoutingModule } from './crud-generator-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CrudGeneratorComponent } from './crud-generator.component';
import { MatTableModule } from '@angular/material/table';
import { ListarCrudsComponent } from './listar-cruds/listar-cruds.component';


@NgModule({
  declarations: [
    CrudGeneratorComponent,
    ListarCrudsComponent
  ],
  imports: [
    CommonModule,
    CrudGeneratorRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    SharedModule,
    MatTableModule
  ]
})
export class CrudGeneratorModule { }
