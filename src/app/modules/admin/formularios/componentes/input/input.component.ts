import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormularioComponentesHtmlInput } from 'app/modules/admin/FormularioComponentesHtmlInput/FormularioComponentesHtmlInput.type';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() formularioComponentesHtmlInput: FormularioComponentesHtmlInput = null;
  @Input() formularioGroup: UntypedFormGroup;



  constructor() { }

  ngOnInit() {
  }

}
