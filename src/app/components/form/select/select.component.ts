import { Component, Input } from '@angular/core';
import { AbstractControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent {
  @Input() formGroup: FormGroup | AbstractControl | any;
  @Input() options: any;
  @Input() selected?: number;
  @Input() required = false;
  @Input() controlName: FormControlName | any;
  @Input() fieldName: string | any;
  @Input() placeholder: string | any;
  @Input() hint: string | any;
  @Input() multiple = false;
}
