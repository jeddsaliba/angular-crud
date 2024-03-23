import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillEditorComponent } from './quill-editor.component';
import { SharedModule } from '@shared/shared.module';
import { QuillModule } from 'ngx-quill';



@NgModule({
  declarations: [
    QuillEditorComponent
  ],
  exports: [
    QuillEditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuillModule.forRoot()
  ]
})
export class QuillEditorModule { }
