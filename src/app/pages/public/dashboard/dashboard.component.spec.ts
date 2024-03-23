import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { PerformancePerMonthComponent } from './performance-per-month/performance-per-month.component';
import { StatusComponent } from './status/status.component';
import { TopPerformersComponent } from './top-performers/top-performers.component';
import { ReduxModule } from '@shared/redux/redux.module';
import { NgChartsModule } from 'ng2-charts';
import { SelectModule } from '@components/form/select/select.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        PerformancePerMonthComponent,
        StatusComponent,
        TopPerformersComponent,
      ],
      imports: [BrowserAnimationsModule, SharedModule, ReduxModule, NgChartsModule, SelectModule],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
