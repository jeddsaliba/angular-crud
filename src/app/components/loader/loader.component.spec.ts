import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { ReduxModule } from '@shared/redux/redux.module';
import { SharedModule } from '@shared/shared.module';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      imports: [
        SharedModule,
        ReduxModule
      ]
    });
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
