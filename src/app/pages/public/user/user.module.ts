import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';
import { DatatableModule } from 'src/app/components/datatable/datatable.module';


@NgModule({
  declarations: [
    ListComponent,
    CreateUpdateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialThemeModule,
    DatatableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
