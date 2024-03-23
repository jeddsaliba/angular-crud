import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from './view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReduxModule } from '@shared/redux/redux.module';
import { SharedModule } from '@shared/shared.module';
import { ListComponent } from '../task/list/list.component';
import { DatatableModule } from '@components/datatable/datatable.module';
import { InputModule } from '@components/form/input/input.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewComponent, ListComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        ReduxModule,
        RouterTestingModule,
        DatatableModule,
        InputModule
      ]
    });
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
