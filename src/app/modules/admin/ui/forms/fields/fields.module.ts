import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { FormsFieldsComponent } from 'app/modules/admin/ui/forms/fields/fields.component';

export const routes: Route[] = [
    {
        path     : '',
        component: FormsFieldsComponent
    }
];

@NgModule({
    declarations: [
        FormsFieldsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
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
        SharedModule
    ]
})
export class FormsFieldsModule
{
}
