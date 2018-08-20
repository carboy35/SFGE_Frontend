import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEleccionComponent } from './tipo-eleccion.component';

describe('TipoEleccionComponent', () => {
  let component: TipoEleccionComponent;
  let fixture: ComponentFixture<TipoEleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
