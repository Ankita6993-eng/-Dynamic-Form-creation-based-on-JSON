import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormFiled} from '../form-filed';
import {FormfiledControlService} from '../formfiled-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

@Input() formfileds:FormFiled<string>[]=[];
form:FormGroup;
payload=' ';

  constructor(private formfiledservice:FormfiledControlService) { }

  ngOnInit(): void {
    this.form=this.formfiledservice.toFormGroup(this.formfileds);
  }

  onsubmit(){
    this.payload=JSON.stringify(this.form.getRawValue());
    console.log('this.payload', this.payload);
    
  }

}
