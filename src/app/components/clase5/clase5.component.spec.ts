import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase5Component } from './clase5.component';

describe('Clase5Component', () => {
  let component: Clase5Component;
  let fixture: ComponentFixture<Clase5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clase5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clase5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
