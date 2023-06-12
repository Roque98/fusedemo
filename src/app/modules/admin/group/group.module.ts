import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {CdkTreeModule} from '@angular/cdk/tree';



@NgModule({
  declarations: [
    GroupComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CdkTreeModule
  ]
})
export class GroupModule { }
