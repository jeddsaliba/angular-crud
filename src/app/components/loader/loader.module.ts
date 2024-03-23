import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LoaderModule { }
