import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizadosModuloComponent } from './autorizados-modulo.component';

describe('AutorizadosModuloComponent', () => {
  let component: AutorizadosModuloComponent;
  let fixture: ComponentFixture<AutorizadosModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorizadosModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizadosModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
