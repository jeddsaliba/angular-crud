import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancePerMonthComponent } from './performance-per-month.component';
import { SharedModule } from '@shared/shared.module';
import { ReduxModule } from '@shared/redux/redux.module';
import { NgChartsModule } from 'ng2-charts';
import { SelectModule } from '@components/form/select/select.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PerformancePerMonthComponent', () => {
  let component: PerformancePerMonthComponent;
  let fixture: ComponentFixture<PerformancePerMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformancePerMonthComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        ReduxModule,
        NgChartsModule,
        SelectModule
      ]
    });
    fixture = TestBed.createComponent(PerformancePerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
