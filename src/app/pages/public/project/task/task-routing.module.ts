import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateComponent } from './create-update/create-update.component';

const routes: Routes = [
  {
    path: 'update/:id',
    component: CreateUpdateComponent,
    data: {
      breadcrumb: {
        label: 'Update Task',
      },
    },
  },
  {
    path: 'create',
    component: CreateUpdateComponent,
    data: {
      breadcrumb: {
        label: 'Create Task',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
