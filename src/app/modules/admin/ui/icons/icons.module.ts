import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { IconsComponent } from 'app/modules/admin/ui/icons/icons.component';
import { IconsResolver } from 'app/modules/admin/ui/icons/icons.resolvers';

export const routes: Route[] = [
    {
        // Redirect /icons to /icons/material-twotone
        path      : '',
        pathMatch : 'full',
        redirectTo: 'material-twotone'
    },
    {
        path     : '',
        component: IconsComponent,
        children : [
            {
                path   : '**',
                resolve: {
                    icons: IconsResolver
                }
            }
        ]
    }
];

@NgModule({
    declarations: [
        IconsComponent
    ],
    imports     : [
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        FuseHighlightModule,
        SharedModule
    ]
})
export class IconsModule
{
}
