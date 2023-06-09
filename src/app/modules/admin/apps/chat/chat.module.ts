import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from 'app/shared/shared.module';
import { chatRoutes } from 'app/modules/admin/apps/chat/chat.routing';
import { ChatComponent } from 'app/modules/admin/apps/chat/chat.component';
import { ChatsComponent } from 'app/modules/admin/apps/chat/chats/chats.component';
import { ContactInfoComponent } from 'app/modules/admin/apps/chat/contact-info/contact-info.component';
import { ConversationComponent } from 'app/modules/admin/apps/chat/conversation/conversation.component';
import { NewChatComponent } from 'app/modules/admin/apps/chat/new-chat/new-chat.component';
import { ProfileComponent } from 'app/modules/admin/apps/chat/profile/profile.component';

@NgModule({
    declarations: [
        ChatComponent,
        ChatsComponent,
        ContactInfoComponent,
        ConversationComponent,
        NewChatComponent,
        ProfileComponent
    ],
    imports     : [
        RouterModule.forChild(chatRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatSidenavModule,
        SharedModule
    ]
})
export class ChatModule
{
}
