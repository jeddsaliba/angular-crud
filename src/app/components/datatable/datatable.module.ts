import { NgModule } from '@angular/core';
import { DatatableComponent } from './datatable.component';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DatatableComponent
  ],
  exports: [
    DatatableComponent
  ],
  imports: [
    CommonModule,
    MaterialThemeModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DatatableModule { }