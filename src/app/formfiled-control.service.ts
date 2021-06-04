import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';
import {FormFiled} from './form-filed'

@Injectable({
  providedIn: 'root'
})
export class FormfiledControlService {

  constructor() { }

  toFormGroup(inputs:FormFiled<string>[]): FormGroup|any{
    const group:any={};
    inputs.forEach(input=>{
      let validator:ValidatorFn[]=input.required?[Validators.required] : [];
      switch(input.validator){
        case "email":
          validator.push(Validators.email);
          break;
        case "required":
            validator.push(Validators.required);
            break;
        default:
          break;
      }
      group[input.key]=validator.length > 0 ? new FormControl(input.value || '',validator) : new FormControl(input.value || '');
    });
    return new FormGroup(group);
  }

  getFormFields(){
    const inputs:FormFiled<string>[]=[
      new FormFiled<string>({
        controlType:"textbox",
        key:'name',
        label:'Name',
        required:true,
        validator:"required",
        order:1
      }),

      new FormFiled<string>({
        controlType:"textbox",
        key:'email',
        label:'Email',
        required:true,
        validator:"email",
        order:2
      }),

      new FormFiled<string>({
        controlType:"dropdown",
        key:'country',
        label:'Country',
        required:true,
        validator:"required",
        options: [
          {key: 'india',  value: 'India'},
          {key: 'usa',  value: 'United States of America'},
          {key: 'other',   value: 'Other'}
        ],
        order:3
      }),

      new FormFiled<string>({
        controlType:"checkbox",
        key:'agree',
        label:'I accept terms and services',
        type:'checkbox',
        required:true,
        validator:"required",
        order:4
      }),

      new FormFiled<string>({
        controlType:"radio",
        key:'gender',
        label:'Gender',
        type:'radio',
        required:true,
        validator:"required",
        options:[
          {key:'female',value:'Female'},
          {key:'male',value:'Male'}
        ],
        order:5
      }),
      new FormFiled<string>({
        controlType:"textarea",
        key:'message',
        label:'Message',
        type:'textarea',
        validator:"required",
        required:true,
        order:6
      })
    ];

    return of(inputs.sort((a,b)=>a.order-b.order));
  }
}
