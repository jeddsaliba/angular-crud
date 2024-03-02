import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { ViewComponent } from './view/view.component';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    data: {
      breadcrumb: {
        label: 'Projects'
      }
    },
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'create',
        component: CreateUpdateComponent,
        data: {
          breadcrumb: {
            label: 'Create'
          }
        }
      },
      {
        path: ':id',
        component: ViewComponent,
        data: {
          breadcrumb: {
            label: 'View'
          }
        }
      },
      {
        path: ':id/update',
        component: CreateUpdateComponent,
        data: {
          breadcrumb: {
            label: 'Update'
          }
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
