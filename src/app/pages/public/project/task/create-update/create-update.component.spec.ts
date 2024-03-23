import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateComponent } from './create-update.component';
import { SharedModule } from '@shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ReduxModule } from '@shared/redux/redux.module';
import { InputModule } from '@components/form/input/input.module';
import { SelectModule } from '@components/form/select/select.module';
import { QuillEditorModule } from '@components/form/quill-editor/quill-editor.module';
import { DatePickerModule } from '@components/form/date-picker/date-picker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateUpdateComponent', () => {
  let component: CreateUpdateComponent;
  let fixture: ComponentFixture<CreateUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUpdateComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        ReduxModule,
        RouterTestingModule,
        InputModule,
        SelectModule,
        QuillEditorModule,
        DatePickerModule
      ]
    });
    fixture = TestBed.createComponent(CreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
