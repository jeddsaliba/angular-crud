import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    SelectComponent
  ],
  exports: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SelectModule { }
