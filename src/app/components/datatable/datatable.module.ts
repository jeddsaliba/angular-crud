import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    DatatableComponent
  ],
  exports: [
    DatatableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DatatableModule { }
