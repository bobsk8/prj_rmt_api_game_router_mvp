import { TestBed, inject } from '@angular/core/testing';

import { DadosCadastraisService } from './dados-cadastrais.service';

describe('DadosCadastraisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosCadastraisService]
    });
  });

  it('should be created', inject([DadosCadastraisService], (service: DadosCadastraisService) => {
    expect(service).toBeTruthy();
  }));
});
