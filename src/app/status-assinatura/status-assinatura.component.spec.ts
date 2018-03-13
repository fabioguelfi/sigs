import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAssinaturaComponent } from './status-assinatura.component';

describe('StatusAssinaturaComponent', () => {
  let component: StatusAssinaturaComponent;
  let fixture: ComponentFixture<StatusAssinaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusAssinaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAssinaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
