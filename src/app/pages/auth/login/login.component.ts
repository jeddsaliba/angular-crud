import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { login } from 'src/app/shared/store/user/user.action';
import { selectUser } from 'src/app/shared/store/user/user.selector';
// import { ComponentService } from 'src/app/services/component/component.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup | any;
  isLoaded = true;
  constructor(
    private auth: AuthService,
    protected formBuilder: FormBuilder,
    private router: Router,
    private store: Store<any>
    // private componentService: ComponentService
  ) { }
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        'khaag@example.com',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100)
        ])
      ],
      password: [
        'password',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100)
        ])
      ]
    });
  }
  onHandleSubmit(): void {
    this.store.dispatch(login(this.loginForm.value));
    // this.isLoaded = false;
    // this.auth.login(this.loginForm.value).then((res: any) => {
    //   this.isLoaded = true;
    //   if (res.error) {
    //     this.componentService.snackbar(res.message);
    //     return;
    //   }
    //   this.componentService.snackbar(res.result.message);
    //   localStorage.setItem('user', JSON.stringify(res.result.payload.user));
    //   localStorage.setItem('access_token', res.result.payload.access_token);
    //   if (res.result.payload.user.role_id === 3) {
    //     this.router.navigate(['students']);
    //   } else {
    //     this.router.navigate(['dashboard']);
    //   }
    // }).catch((e: any) => {
    //   console.log('e', e);
    //   this.isLoaded = true;
    // });
  }
}
