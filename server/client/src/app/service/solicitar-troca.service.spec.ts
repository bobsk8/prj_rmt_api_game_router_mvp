import { TestBed, inject } from '@angular/core/testing';

import { SolicitarTrocaService } from './solicitar-troca.service';

describe('SolicitarTrocaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitarTrocaService]
    });
  });

  it('should be created', inject([SolicitarTrocaService], (service: SolicitarTrocaService) => {
    expect(service).toBeTruthy();
  }));
});
