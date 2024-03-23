import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '@theme/theme.module';
import { BreadcrumbModule } from 'xng-breadcrumb';

const SharedModules = [
  ThemeModule,
  BreadcrumbModule,
  RouterModule,
  ReactiveFormsModule,
  HttpClientModule
];
@NgModule({
  exports: [
    SharedModules
  ]
})
export class SharedModule { }
