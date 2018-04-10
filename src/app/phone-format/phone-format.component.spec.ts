import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFormatComponent } from './phone-format.component';

describe('PhoneFormatComponent', () => {
  let component: PhoneFormatComponent;
  let fixture: ComponentFixture<PhoneFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
