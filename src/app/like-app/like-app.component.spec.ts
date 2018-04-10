import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeAppComponent } from './like-app.component';

describe('LikeAppComponent', () => {
  let component: LikeAppComponent;
  let fixture: ComponentFixture<LikeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
