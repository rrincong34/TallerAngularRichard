import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase3Component } from './clase3.component';

describe('Clase3Component', () => {
  let component: Clase3Component;
  let fixture: ComponentFixture<Clase3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clase3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
