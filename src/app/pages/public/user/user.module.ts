import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
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
    UserRoutingModule,
    BreadcrumbModule
  ]
})
export class UserModule { }
