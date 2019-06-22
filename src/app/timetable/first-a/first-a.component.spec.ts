import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAComponent } from './first-a.component';

describe('FirstAComponent', () => {
  let component: FirstAComponent;
  let fixture: ComponentFixture<FirstAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
