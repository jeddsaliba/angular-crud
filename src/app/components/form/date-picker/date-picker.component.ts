import { Component, Input } from '@angular/core';
import { AbstractControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html'
})
export class DatePickerComponent {
  @Input() formGroup: FormGroup | AbstractControl | any;
  @Input() type = 'text';
  @Input() required = false;
  @Input() controlName: FormControlName | any;
  @Input() fieldName: string | any;
  @Input() placeholder: string | any;
  @Input() hint: string | any;
}
