import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IModal } from '../tablas.dto';

@Component({
  selector: 'app-modal-dialogs',
  templateUrl: './modal-dialogs.component.html'
})
export class ModalDialogsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IModal) { }
}
