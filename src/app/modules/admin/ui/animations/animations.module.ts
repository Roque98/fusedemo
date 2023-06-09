import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { AnimationsComponent } from 'app/modules/admin/ui/animations/animations.component';

export const routes: Route[] = [
    {
        path     : '',
        component: AnimationsComponent
    }
];

@NgModule({
    declarations: [
        AnimationsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTabsModule,
        FuseHighlightModule,
        SharedModule
    ]
})
export class AnimationsModule
{
}
