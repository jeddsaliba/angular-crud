import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateComponent } from './template/template.component';
import { ReduxModule } from '@redux/redux.module';
import { SharedModule } from '@shared/shared.module';
import { LoaderModule } from '@components/loader/loader.module';
import { DialogComponent } from '@components/dialog/dialog.component';
import { ErrorComponent } from '@pages/error/error.component';
import { ToolbarModule } from '@components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ErrorComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReduxModule,
    LoaderModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
