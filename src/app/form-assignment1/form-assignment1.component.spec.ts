import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssignment1Component } from './form-assignment1.component';

describe('FormAssignment1Component', () => {
  let component: FormAssignment1Component;
  let fixture: ComponentFixture<FormAssignment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAssignment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAssignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
