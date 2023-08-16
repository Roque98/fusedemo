import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablasRoutingModule } from './tablas-routing.module';
import { TablasComponent } from '../tablas/tablas.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalDialogsComponent } from './modal-dialogs/modal-dialogs.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    TablasComponent,
    ModalDialogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TablasRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    SharedModule       
  ]
})
export class TablasModule { }