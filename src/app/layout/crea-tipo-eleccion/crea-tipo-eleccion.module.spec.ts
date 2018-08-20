import { CreaTipoEleccionModule } from './crea-tipo-eleccion.module';

describe('CreaTipoEleccionModule', () => {
  let creaTipoEleccionModule: CreaTipoEleccionModule;

  beforeEach(() => {
    creaTipoEleccionModule = new CreaTipoEleccionModule();
  });

  it('should create an instance', () => {
    expect(creaTipoEleccionModule).toBeTruthy();
  });
});
