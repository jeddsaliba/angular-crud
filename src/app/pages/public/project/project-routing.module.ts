import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateUpdateComponent } from './create-update/create-update.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: {
      breadcrumb: {
        label: 'Projects'
      }
    },
    children: [
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
        path: 'update/:id',
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
