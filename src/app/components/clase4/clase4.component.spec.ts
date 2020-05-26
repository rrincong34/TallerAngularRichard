import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase4Component } from './clase4.component';

describe('Clase4Component', () => {
  let component: Clase4Component;
  let fixture: ComponentFixture<Clase4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clase4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clase4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
