import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ListComponent } from './list/list.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatatableModule } from 'src/app/components/datatable/datatable.module';
import { ViewComponent } from './view/view.component';
import { ProjectComponent } from './project.component';


@NgModule({
  declarations: [
    ProjectComponent,
    ListComponent,
    CreateUpdateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialThemeModule,
    DatatableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectModule { }
