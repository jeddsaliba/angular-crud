import { NgModule } from '@angular/core';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';
import { CommonModule } from '@angular/common';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { DatatableModule } from 'src/app/components/datatable/datatable.module';

@NgModule({
  declarations: [
    CreateUpdateComponent,
    ListComponent,
    ViewComponent
  ],
  exports: [
    CreateUpdateComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    MaterialThemeModule,
    DatatableModule
  ]
})
export class TaskModule { }