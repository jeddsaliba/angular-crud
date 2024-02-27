import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';
import { DialogType } from './dialog.type';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class DialogEffect {
  constructor(private actions$: Actions, private _snackBar: MatSnackBar) {}
  _notificationSuccessDialog = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DialogType.NOTIFICATION_SUCCESS_DIALOG),
        switchMap(({payload}) => {
          return of(this._snackBar.open(payload, 'OK', { duration: 3000 }));
        })
      );
    },
    { dispatch: false }
  );
  _notificationErrorDialog = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DialogType.NOTIFICATION_ERROR_DIALOG),
        switchMap(({payload}) => {
          return of(this._snackBar.open(payload, 'OK', { duration: 3000 }));
        })
      );
    },
    { dispatch: false }
  );
}
