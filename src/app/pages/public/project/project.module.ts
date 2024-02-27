import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ListComponent } from './list/list.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { BreadcrumbModule } from 'xng-breadcrumb';


@NgModule({
  declarations: [
    ListComponent,
    CreateUpdateComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    BreadcrumbModule
  ]
})
export class ProjectModule { }
