import { Component, Input } from '@angular/core';
import { AbstractControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input() formGroup: FormGroup | AbstractControl | any;
  @Input() type = 'text';
  @Input() required = false;
  @Input() readonly = false;
  @Input() disabled = false;
  @Input() controlName: FormControlName | any;
  @Input() fieldName: string | any;
  @Input() placeholder: string | any;
  @Input() hint: string | any;
  @Input() isPercent = false;
}
