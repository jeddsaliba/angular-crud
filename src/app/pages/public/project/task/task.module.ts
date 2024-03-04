import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';
import { CommonModule } from '@angular/common';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { ListComponent } from './list/list.component';
import { DatatableModule } from 'src/app/components/datatable/datatable.module';
import { TaskRoutingModule } from './task-routing.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/components/form/input/input.module';
import { QuillEditorModule } from 'src/app/components/form/quill-editor/quill-editor.module';
import { SelectModule } from 'src/app/components/form/select/select.module';
import { DatePickerModule } from 'src/app/components/form/date-picker/date-picker.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    CreateUpdateComponent,
    ViewComponent,
    ListComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialThemeModule,
    DatatableModule,
    InputModule,
    QuillEditorModule,
    SelectModule,
    DatePickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskModule { }