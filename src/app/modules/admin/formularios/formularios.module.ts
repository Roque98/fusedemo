import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { DatePickerComponent } from './componentes/date-picker/date-picker.component';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { InputComponent } from './componentes/input/input.component';


@NgModule({
  declarations: [
    FormulariosComponent,
    DatePickerComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatMomentDateModule,
    MatSelectModule,
    FuseHighlightModule,
    MatTooltipModule,
    SharedModule
  ]
})
export class FormulariosModule { }
