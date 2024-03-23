import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';

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
    loadChildren: () => import('./task/task.module').then((m) => m.TaskModule),
  },
  {
    path: ':id/update',
    component: CreateUpdateComponent,
    data: {
      breadcrumb: {
        label: 'Update',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
