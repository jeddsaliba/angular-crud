import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginSuccess, logoutSuccess } from './auth.action';
import { catchError, delay, map, of, switchMap, tap } from 'rxjs';
import { UserType } from './auth.type';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Auth } from './auth.model';
import { AuthService } from '@shared/services/auth/auth.service';
import { showLoader, showLoaderCancel, showSnackbar } from '../shared/shared.action';
import { Urls } from '@enum/urls';
import { environment } from '@environments/environment';

@Injectable()
export class AuthEffect {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private store: Store<Auth>,
    private router: Router
  ) {}
  _login = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserType.LOGIN),
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
      switchMap(({ payload }) => {
        return this.authService.login(payload).pipe(
          map((result) => {
            return loginSuccess(result);
          }),
          delay(environment.requestDelay),
          tap(({ payload }) => {
            const { result } = payload;
            sessionStorage.setItem('access_token', result?.access_token);
            sessionStorage.setItem('user', JSON.stringify(result?.user));
            this.store.dispatch(showSnackbar(payload?.message));
            this.store.dispatch(showLoaderCancel());
            this.router.navigate([`${Urls.dashboard}`]);
          }),
          catchError(({ error }) => of(showSnackbar(error?.message), showLoaderCancel()))
        );
      })
    );
  });
  _logout = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserType.LOGOUT),
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
      switchMap(() => {
        return this.authService.logout().pipe(
          map((result) => {
            return logoutSuccess(result);
          }),
          delay(environment.requestDelay),
          tap(({ payload }) => {
            sessionStorage.clear();
            this.store.dispatch(showSnackbar(payload?.message));
            this.store.dispatch(showLoaderCancel());
            this.router.navigate([`${Urls.login}`]);
          }),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
}
