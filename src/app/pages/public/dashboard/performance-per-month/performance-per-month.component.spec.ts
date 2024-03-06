import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancePerMonthComponent } from './performance-per-month.component';

describe('PerformancePerMonthComponent', () => {
  let component: PerformancePerMonthComponent;
  let fixture: ComponentFixture<PerformancePerMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformancePerMonthComponent]
    });
    fixture = TestBed.createComponent(PerformancePerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
