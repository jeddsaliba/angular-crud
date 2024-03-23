import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponent } from './template.component';
import { ReduxModule } from '@shared/redux/redux.module';
import { SharedModule } from '@shared/shared.module';
import { LoaderModule } from '@components/loader/loader.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarModule } from '@components/toolbar/toolbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        ReduxModule,
        LoaderModule,
        RouterTestingModule,
        ToolbarModule
      ]
    });
    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
