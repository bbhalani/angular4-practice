import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveAssignmentComponent } from './form-reactive-assignment.component';

describe('FormReactiveAssignmentComponent', () => {
  let component: FormReactiveAssignmentComponent;
  let fixture: ComponentFixture<FormReactiveAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
