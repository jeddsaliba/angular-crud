import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ListComponent } from './list/list.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { DatatableComponent } from 'src/app/components/datatable/datatable.component';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    CreateUpdateComponent,
    DatatableComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialThemeModule
  ]
})
export class ProjectModule { }
