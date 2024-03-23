import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class InputModule { }
