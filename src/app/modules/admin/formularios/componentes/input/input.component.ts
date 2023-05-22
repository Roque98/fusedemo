import { Component, Input, OnInit } from '@angular/core';
import { FormularioComponentesHtmlInput } from '../../formularios.type';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() formularioComponentesHtmlInput: FormularioComponentesHtmlInput = null;
  @Input() formularioGroup: FormGroup;



  constructor() { }

  ngOnInit() {
  }

}
