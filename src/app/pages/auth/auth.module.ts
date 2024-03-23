import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@shared/shared.module';
import { InputModule } from '@components/form/input/input.module';
import { LoaderModule } from '@components/loader/loader.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    InputModule,
    LoaderModule
  ]
})
export class AuthModule { }
