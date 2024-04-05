import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '@shared/shared.module';
import { DatatableModule } from '@components/datatable/datatable.module';
import { InputModule } from '@components/form/input/input.module';
import { TaskModule } from './task/task.module';
import { QuillEditorModule } from '@components/form/quill-editor/quill-editor.module';


@NgModule({
  declarations: [
    CreateUpdateComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    DatatableModule,
    InputModule,
    TaskModule,
    QuillEditorModule
  ]
})
export class ProjectModule { }
