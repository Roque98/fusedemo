import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotonComponent } from './componentes/boton/boton.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BotonComponent,
        
    ],
    declarations: [
        BotonComponent
    ]
})
export class SharedModule
{
}
