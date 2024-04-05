import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { SharedType } from './shared.type';
import { isRouteChildSuccess, setSelectOptionsSuccess, showLoaderSuccess, showSnackbarSuccess } from './shared.action';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SharedEffect {
  constructor(
    private actions$: Actions,
    private _snackBar: MatSnackBar
  ) {}
  _setSelectOptions = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedType.SELECT_OPTIONS),
      map(({payload}) => {
        return setSelectOptionsSuccess(payload);
      })
    );
  });
  _showLoader = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedType.SHOW_LOADER),
      map(({payload}) => {
        return showLoaderSuccess(payload);
      })
    );
  });
  _showPrompt = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedType.SHOW_SNACKBAR),
      map(({ payload }) => {
        this._snackBar.open(payload, 'OK', { duration: 3000 });
        return showSnackbarSuccess(payload);
      })
    );
  });
  _isRouteChild = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedType.IS_ROUTE_CHILD),
      map(({payload}) => {
        return isRouteChildSuccess(payload);
      })
    );
  });
}
