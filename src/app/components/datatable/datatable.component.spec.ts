import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableComponent } from './datatable.component';
import { SharedModule } from '@shared/shared.module';
import { ReduxModule } from '@shared/redux/redux.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DatatableComponent', () => {
  let component: DatatableComponent;
  let fixture: ComponentFixture<DatatableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatatableComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        ReduxModule
      ]
    });
    fixture = TestBed.createComponent(DatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
