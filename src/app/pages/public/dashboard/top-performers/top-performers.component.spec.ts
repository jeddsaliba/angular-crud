import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPerformersComponent } from './top-performers.component';
import { SharedModule } from '@shared/shared.module';
import { ReduxModule } from '@shared/redux/redux.module';
import { NgChartsModule } from 'ng2-charts';

describe('TopPerformersComponent', () => {
  let component: TopPerformersComponent;
  let fixture: ComponentFixture<TopPerformersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopPerformersComponent],
      imports: [
        SharedModule,
        ReduxModule,
        NgChartsModule
      ]
    });
    fixture = TestBed.createComponent(TopPerformersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
