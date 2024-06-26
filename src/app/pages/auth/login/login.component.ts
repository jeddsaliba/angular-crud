import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '@environments/environment';
import { Store } from '@ngrx/store';
import { login } from '@shared/redux/auth/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  appName: string = environment.appName;
  loginForm: FormGroup | any;
  isLoaded = true;
  constructor(protected formBuilder: FormBuilder, private store: Store<any>) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        'admin@admin.com',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100),
        ]),
      ],
      password: [
        'password',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100),
        ]),
      ],
    });
  }
  onHandleSubmit(): void {
    this.store.dispatch(login(this.loginForm.value));
  }
}
