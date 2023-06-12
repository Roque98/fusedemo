import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRoutingModule } from './pagina-routing.module';
import { PaginaComponent } from './pagina.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PaginaComponent
  ],
  imports: [
    CommonModule,
    PaginaRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule
  ]
})
export class PaginaModule { }
