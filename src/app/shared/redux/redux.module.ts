import { NgModule } from '@angular/core';
import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { datatableReducer } from './datatable/datatable.reducer';
import { DataTableEffect } from './datatable/datatable.effect';
import { sharedReducer } from './shared/shared.reducer';
import { SharedEffect } from './shared/shared.effect';
import { authReducer } from './auth/auth.reducer';
import { AuthEffect } from './auth/auth.effect';
import { chartReducer } from './chart/chart.reducer';
import { ChartEffect } from './chart/chart.effect';
import { projectReducer } from './project/project.reducer';
import { ProjectEffect } from './project/project.effect';
import { projectTaskReducer } from './task/task.reducer';
import { ProjectTaskEffect } from './task/task.effect';
import { userReducer } from './user/user.reducer';
import { UserEffect } from './user/user.effect';

const ReduxModules = [
  StoreModule.forRoot({
    datatable: datatableReducer,
    shared: sharedReducer,
    auth: authReducer,
    chart: chartReducer,
    project: projectReducer,
    task: projectTaskReducer,
    user: userReducer
  }),
  EffectsModule.forRoot([DataTableEffect, SharedEffect, AuthEffect, ChartEffect, ProjectEffect, ProjectTaskEffect, UserEffect]),
  !environment.production
    ? StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
      })
    : [],
];
@NgModule({
  imports: [ReduxModules],
})
export class ReduxModule {}
