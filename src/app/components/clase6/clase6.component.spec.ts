import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase6Component } from './clase6.component';

describe('Clase6Component', () => {
  let component: Clase6Component;
  let fixture: ComponentFixture<Clase6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clase6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clase6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
