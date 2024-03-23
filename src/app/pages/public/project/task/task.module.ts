import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@shared/shared.module';
import { DatatableModule } from '@components/datatable/datatable.module';
import { InputModule } from '@components/form/input/input.module';
import { SelectModule } from '@components/form/select/select.module';
import { QuillEditorModule } from '@components/form/quill-editor/quill-editor.module';
import { DatePickerModule } from '@components/form/date-picker/date-picker.module';


@NgModule({
  declarations: [
    CreateUpdateComponent,
    ListComponent,
    ViewComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
    DatatableModule,
    InputModule,
    SelectModule,
    QuillEditorModule,
    DatePickerModule
  ]
})
export class TaskModule { }
