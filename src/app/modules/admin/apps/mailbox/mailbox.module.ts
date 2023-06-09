import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { QuillModule } from 'ngx-quill';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { MailboxComponent } from 'app/modules/admin/apps/mailbox/mailbox.component';
import { MailboxComposeComponent } from 'app/modules/admin/apps/mailbox/compose/compose.component';
import { MailboxDetailsComponent } from 'app/modules/admin/apps/mailbox/details/details.component';
import { MailboxListComponent } from 'app/modules/admin/apps/mailbox/list/list.component';
import { MailboxSettingsComponent } from 'app/modules/admin/apps/mailbox/settings/settings.component';
import { MailboxSidebarComponent } from 'app/modules/admin/apps/mailbox/sidebar/sidebar.component';
import { mailboxRoutes } from 'app/modules/admin/apps/mailbox/mailbox.routing';

@NgModule({
    declarations: [
        MailboxComponent,
        MailboxComposeComponent,
        MailboxDetailsComponent,
        MailboxListComponent,
        MailboxSettingsComponent,
        MailboxSidebarComponent
    ],
    imports     : [
        RouterModule.forChild(mailboxRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        QuillModule.forRoot(),
        FuseFindByKeyPipeModule,
        FuseNavigationModule,
        FuseScrollbarModule,
        FuseScrollResetModule,
        SharedModule
    ]
})
export class MailboxModule
{
}
