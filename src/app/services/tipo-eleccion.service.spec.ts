import { TestBed, inject } from '@angular/core/testing';

import { TipoEleccionService } from './tipo-eleccion.service';

describe('TipoEleccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoEleccionService]
    });
  });

  it('should be created', inject([TipoEleccionService], (service: TipoEleccionService) => {
    expect(service).toBeTruthy();
  }));
});
