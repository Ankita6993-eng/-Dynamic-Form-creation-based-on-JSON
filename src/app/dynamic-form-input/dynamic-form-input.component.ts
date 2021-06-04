import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import {FormFiled} from '../form-filed'

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent implements OnInit {

@Input() input:FormFiled<string>;
@Input() form:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get isvalid(){return this.form.controls[this.input.key].valid}

}
