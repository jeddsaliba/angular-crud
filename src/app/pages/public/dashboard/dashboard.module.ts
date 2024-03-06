import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';
import { DashboardComponent } from './dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TopPerformersComponent } from './top-performers/top-performers.component';
import { PerformancePerMonthComponent } from './performance-per-month/performance-per-month.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'src/app/components/form/select/select.module';

@NgModule({
  declarations: [
    StatusComponent,
    DashboardComponent,
    TopPerformersComponent,
    PerformancePerMonthComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BreadcrumbModule,
    MaterialThemeModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormsModule,
    SelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
