import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { SharedModule } from '@shared/shared.module';
import { ReduxModule } from '@shared/redux/redux.module';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [
        SharedModule,
        ReduxModule
      ]
    });
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
