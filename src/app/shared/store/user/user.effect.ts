import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth/auth.service';
import { getUserListSuccess, loginSuccess, logoutSuccess } from './user.action';
import { catchError, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { UserType } from './user.type';
import {
  notificationErrorDialog,
  notificationSuccessDialog,
} from '../dialog/dialog.action';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { User } from './user.model';
import { UserService } from 'src/app/services/user/user.service';
import { setDataTable } from '../datatable/datatable.action';
import { UserTableHeads } from './user.state';
import { urls } from 'src/app/lib/urls/urls';

@Injectable()
export class UserEffect {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private actions$: Actions,
    private store: Store<User>,
    private router: Router
  ) {}
  _login = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserType.LOGIN),
      switchMap(({ payload }) => {
        return this.authService.login(payload).pipe(
          map((result) => {
            return loginSuccess(result);
          }),
          tap(({ payload }) => {
            const { result } = payload;
            sessionStorage.setItem('access_token', result?.access_token);
            sessionStorage.setItem('user', JSON.stringify(result?.user));
            this.store.dispatch(notificationSuccessDialog(payload?.message));
            this.router.navigate([`${urls.dashboard}`]);
          }),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
  _logout = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserType.LOGOUT),
      switchMap(() => {
        return this.authService.logout().pipe(
          map((result) => {
            return logoutSuccess(result);
          }),
          tap(({ payload }) => {
            sessionStorage.clear();
            this.store.dispatch(notificationSuccessDialog(payload?.message));
            this.router.navigate([`${urls.login}`]);
          }),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
  _getUserList = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserType.LIST),
      switchMap(({ payload }) => {
        return this.userService.list(payload).pipe(
          map((data) => {
            const { result } = data;
            this.store.dispatch(
              setDataTable({
                ...result,
                table_heads: UserTableHeads,
                params: payload,
              })
            );
            return getUserListSuccess(data);
          }),
          takeUntil(this.actions$.pipe(ofType(UserType.LIST_CANCEL))),
          catchError(({ error }) => of(notificationErrorDialog(error?.message)))
        );
      })
    );
  });
}
