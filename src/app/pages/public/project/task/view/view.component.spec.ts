import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponent } from './view.component';
import { SharedModule } from '@shared/shared.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InputModule } from '@components/form/input/input.module';
import { QuillEditorModule } from '@components/form/quill-editor/quill-editor.module';
import { DatePickerModule } from '@components/form/date-picker/date-picker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        InputModule,
        QuillEditorModule,
        DatePickerModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
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
