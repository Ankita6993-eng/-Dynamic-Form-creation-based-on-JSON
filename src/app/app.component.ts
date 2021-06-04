import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {FormFiled} from './form-filed';
import {FormfiledControlService} from './formfiled-control.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FormfiledControlService]
})
export class AppComponent {
  title = 'AngularDynamicForms';
  formfileds:Observable<FormFiled<any>[]>;
  constructor(service: FormfiledControlService) {
    this.formfileds = service.getFormFields();
  }
}
