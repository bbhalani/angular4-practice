import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XfinityChallengeComponent } from './xfinity-challenge.component';

describe('XfinityChallengeComponent', () => {
  let component: XfinityChallengeComponent;
  let fixture: ComponentFixture<XfinityChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XfinityChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XfinityChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
