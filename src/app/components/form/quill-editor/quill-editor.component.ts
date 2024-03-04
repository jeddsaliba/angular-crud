import { Component, Input } from '@angular/core';
import { AbstractControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html'
})
export class QuillEditorComponent {
  @Input() formGroup: FormGroup | AbstractControl | any;
  @Input() type = 'text';
  @Input() required = false;
  @Input() controlName: FormControlName | any;
  @Input() fieldName: string | any;
  @Input() placeholder: string | any;
  @Input() hint: string | any;
}
