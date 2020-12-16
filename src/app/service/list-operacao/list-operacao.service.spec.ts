import { TestBed } from '@angular/core/testing';

import { ListOperacaoService } from './list-operacao.service';

describe('ListOperacaoService', () => {
  let service: ListOperacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOperacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
