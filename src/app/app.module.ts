import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/form/button/button.component';
import { TableComponent } from './components/table/table.component';
import { MaterialThemeModule } from './material-theme/material-theme.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NgxEditorModule } from 'ngx-editor';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './shared/store/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './shared/store/user/user.effect';
import { DialogEffect } from './shared/store/dialog/dialog.effect';
import { DashboardComponent } from './pages/public/dashboard/dashboard.component';
import { ToolbarComponent } from './template/toolbar/toolbar.component';
import { environment } from 'src/environments/environment';
import { DialogComponent } from './components/dialog/dialog.component';
import { ProjectEffect } from './shared/store/project/project.effect';
import { projectReducer } from './shared/store/project/project.reducer';
import { DataTableEffect } from './shared/store/datatable/datatable.effect';
import { datatableReducer } from './shared/store/datatable/datatable.reducer';
import { projectTaskReducer } from './shared/store/task/task.reducer';
import { ProjectTaskEffect } from './shared/store/task/task.effect';
import { InputModule } from './components/form/input/input.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TemplateComponent,
    ButtonComponent,
    TableComponent,
    LoginComponent,
    DashboardComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialThemeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    NgxEditorModule,
    InputModule,
    StoreModule.forRoot({
      user: userReducer,
      project: projectReducer,
      datatable: datatableReducer,
      task: projectTaskReducer
    }),
    !environment.production
            ? StoreDevtoolsModule.instrument({
                maxAge: 25, // Retains last 25 states
                logOnly: environment.production, // Restrict extension to log-only mode
            })
            : [],
    EffectsModule.forRoot([
      UserEffect,
      ProjectEffect,
      ProjectTaskEffect,
      DialogEffect,
      DataTableEffect
    ])
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-US'
    },
    DatePipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
