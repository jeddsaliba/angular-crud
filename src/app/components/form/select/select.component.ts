import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControlName, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  @Output() eventOnChange: EventEmitter<any> = new EventEmitter();
  onChange(e: MatSelectChange) {
    this.eventOnChange.emit(e.value);
  }
}