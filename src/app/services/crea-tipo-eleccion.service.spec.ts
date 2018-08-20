import { TestBed, inject } from '@angular/core/testing';

import { CreaTipoEleccionService } from './crea-tipo-eleccion.service';

describe('CreaTipoEleccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreaTipoEleccionService]
    });
  });

  it('should be created', inject([CreaTipoEleccionService], (service: CreaTipoEleccionService) => {
    expect(service).toBeTruthy();
  }));
});
