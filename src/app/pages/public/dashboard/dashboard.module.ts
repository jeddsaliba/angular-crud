import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformancePerMonthComponent } from './performance-per-month/performance-per-month.component';
import { StatusComponent } from './status/status.component';
import { TopPerformersComponent } from './top-performers/top-performers.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { SelectModule } from '@components/form/select/select.module';
import { NgChartsModule } from 'ng2-charts';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PerformancePerMonthComponent,
    StatusComponent,
    TopPerformersComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    SelectModule,
    NgChartsModule,
  ],
})
export class DashboardModule {}
