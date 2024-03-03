import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { InputModule } from 'src/app/components/form/input/input.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputModule
  ]
})
export class AuthModule { }
