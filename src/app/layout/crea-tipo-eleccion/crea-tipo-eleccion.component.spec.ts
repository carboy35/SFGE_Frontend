import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaTipoEleccionComponent } from './crea-tipo-eleccion.component';

describe('CreaTipoEleccionComponent', () => {
  let component: CreaTipoEleccionComponent;
  let fixture: ComponentFixture<CreaTipoEleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaTipoEleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaTipoEleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
