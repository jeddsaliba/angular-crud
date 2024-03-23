import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getUserListSuccess } from './user.action';
import { catchError, delay, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { UserType } from './user.type';

import { Store } from '@ngrx/store';
import { User } from './user.model';
import { setDataTable } from '../datatable/datatable.action';
import { UserTableHeads } from './user.state';
import { UserService } from '@shared/services/user/user.service';
import { showLoader, showLoaderCancel, showSnackbar } from '../shared/shared.action';
import { environment } from '@environments/environment';

@Injectable()
export class UserEffect {
  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<User>
  ) {}
  _getUserList = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserType.LIST),
      tap(() => {
        this.store.dispatch(showLoader(true));
      }),
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
          delay(environment.requestDelay),
          tap(() => {
            this.store.dispatch(showLoaderCancel());
          }),
          takeUntil(this.actions$.pipe(ofType(UserType.LIST_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
}
