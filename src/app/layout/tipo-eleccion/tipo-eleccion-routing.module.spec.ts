import { TipoEleccionRoutingModule } from './tipo-eleccion-routing.module';

describe('TipoEleccionRoutingModule', () => {
  let tipoEleccionRoutingModule: TipoEleccionRoutingModule;

  beforeEach(() => {
    tipoEleccionRoutingModule = new TipoEleccionRoutingModule();
  });

  it('should create an instance', () => {
    expect(tipoEleccionRoutingModule).toBeTruthy();
  });
});
