import { TestBed } from '@angular/core/testing';

import { AddContaService } from './add-conta.service';

describe('AddContaService', () => {
  let service: AddContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddContaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
