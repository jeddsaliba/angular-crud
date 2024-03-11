import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { InputModule } from 'src/app/components/form/input/input.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialThemeModule } from 'src/app/material-theme/material-theme.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialThemeModule,
    ReactiveFormsModule,
    FormsModule,
    InputModule
  ]
})
export class AuthModule { }
