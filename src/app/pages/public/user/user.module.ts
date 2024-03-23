import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { DatatableModule } from '@components/datatable/datatable.module';

@NgModule({
  declarations: [
    ListComponent,
    CreateUpdateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DatatableModule
  ]
})
export class UserModule { }
