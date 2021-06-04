import { TestBed } from '@angular/core/testing';

import { FormfiledControlService } from './formfiled-control.service';

describe('FormfiledControlService', () => {
  let service: FormfiledControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormfiledControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
