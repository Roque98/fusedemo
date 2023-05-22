import { Component, Input, OnInit } from '@angular/core';
import { FormularioComponentesHtmlInput } from '../../formularios.type';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent implements OnInit {

  // value now
  value = new Date();

  // label
  label = 'Fecha';

  // input
  @Input() formularioComponentesHtmlInput: FormularioComponentesHtmlInput = null;

  constructor() { }

  ngOnInit(): void {
  }


}
