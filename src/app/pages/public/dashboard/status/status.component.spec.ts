import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';
import { SharedModule } from '@shared/shared.module';
import { ReduxModule } from '@shared/redux/redux.module';
import { NgChartsModule } from 'ng2-charts';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusComponent],
      imports: [
        SharedModule,
        ReduxModule,
        NgChartsModule
      ]
    });
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
