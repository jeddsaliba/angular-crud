import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    DatePickerComponent
  ],
  exports: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DatePickerModule { }
