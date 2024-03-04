import { NgModule } from '@angular/core';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker.component';

@NgModule({
  declarations: [
    DatePickerComponent
  ],
  exports: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    MaterialThemeModule,
    ReactiveFormsModule
  ]
})
export class DatePickerModule { }