import { NgModule } from '@angular/core';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ],
  imports: [
    CommonModule,
    MaterialThemeModule,
    ReactiveFormsModule
  ]
})
export class InputModule { }