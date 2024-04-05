import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';

import { CreateUpdateComponent as TaskCreateUpdateComponent } from './task/create-update/create-update.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create',
    component: CreateUpdateComponent,
    data: {
      breadcrumb: {
        label: 'Create',
      },
    },
  },
  {
    path: ':id',
    component: ViewComponent,
    data: {
      breadcrumb: {
        label: 'View',
      },
    },
    children: [
      {
        path: 'update',
        component: CreateUpdateComponent,
        data: {
          breadcrumb: {
            label: 'Update',
          },
        }
      },
      {
        path: 'update/:id',
        component: TaskCreateUpdateComponent,
        data: {
          breadcrumb: {
            label: 'Update Task',
          },
        },
      },
      {
        path: 'create',
        component: TaskCreateUpdateComponent,
        data: {
          breadcrumb: {
            label: 'Create Task',
          },
        },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
