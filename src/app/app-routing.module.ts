import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ErrorComponent } from '@pages/error/error.component';
import { authGuard } from '@guard/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    canActivate: [
      authGuard
    ],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/public/dashboard/dashboard.module').then((m) => m.DashboardModule),
        data: {
          breadcrumb: {
            label: 'Dashboard'
          }
        }
      },
      {
        path: 'project',
        loadChildren: () => import('./pages/public/project/project.module').then((m) => m.ProjectModule),
        data: {
          breadcrumb: {
            label: 'Projects',
          },
        }
      },
      {
        path: 'user',
        loadChildren: () => import('./pages/public/user/user.module').then((m) => m.UserModule),
        data: {
          breadcrumb: {
            label: 'Users',
          },
        }
      }
    ]
  },
  { path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule)
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
