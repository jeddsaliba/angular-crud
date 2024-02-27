import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './public/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          breadcrumb: {
            label: 'Dashboard',
          },
        },
      },
      {
        path: 'project',
        loadChildren: () =>
          import('./public/project/project.module').then(
            (m) => m.ProjectModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./public/user/user.module').then(
            (m) => m.UserModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
