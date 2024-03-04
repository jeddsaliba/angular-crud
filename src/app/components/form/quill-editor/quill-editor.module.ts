import { NgModule } from '@angular/core';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillEditorComponent } from './quill-editor.component';
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
    MaterialThemeModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ]
})
export class QuillEditorModule { }