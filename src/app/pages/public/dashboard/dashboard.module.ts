import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';
import { DashboardComponent } from './dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TopPerformersComponent } from './top-performers/top-performers.component';

@NgModule({
  declarations: [
    StatusComponent,
    DashboardComponent,
    TopPerformersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BreadcrumbModule,
    MaterialThemeModule,
    NgChartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
