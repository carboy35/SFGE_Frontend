import { TipoEleccionModule } from './tipo-eleccion.module';

describe('TipoEleccionModule', () => {
  let tipoEleccionModule: TipoEleccionModule;

  beforeEach(() => {
    tipoEleccionModule = new TipoEleccionModule();
  });

  it('should create an instance', () => {
    expect(tipoEleccionModule).toBeTruthy();
  });
});
