import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ReduxModule } from '@shared/redux/redux.module';
import { SharedModule } from '@shared/shared.module';
import { DatatableModule } from '@components/datatable/datatable.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        ReduxModule,
        DatatableModule
      ]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
