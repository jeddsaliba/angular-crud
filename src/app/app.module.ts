import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './components/form/input/input.component';
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
import { userReducer } from './shared/store/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './shared/store/user/user.effect';
import { DialogEffect } from './shared/store/dialog/dialog.effect';
import { DashboardComponent } from './pages/public/dashboard/dashboard.component';
import { ToolbarComponent } from './template/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TemplateComponent,
    InputComponent,
    ButtonComponent,
    TableComponent,
    LoginComponent,
    DashboardComponent
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
    StoreModule.forRoot({user: userReducer}),
    EffectsModule.forRoot([
      UserEffect,
      DialogEffect
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
