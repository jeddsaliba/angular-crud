import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth/auth.service";
import { login, loginSuccess } from "./user.action";
import { catchError, exhaustMap, map, of, switchMap, tap } from "rxjs";
import { UserType } from "./user.type";
import { notificationErrorDialog, notificationSuccessDialog } from "../dialog/dialog.action";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

@Injectable()
export class UserEffect {
    constructor(private authService: AuthService, private actions$: Actions, private store$: Store<any>, private router: Router) {}
    _login = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserType.LOGIN),
            switchMap(({payload}) => {
                return this.authService.login(payload).pipe(
                    tap((payload) => {
                        console.log("pay", payload);
                        sessionStorage.setItem('access_token', payload?.payload?.access_token);
                        sessionStorage.setItem('user', JSON.stringify(payload?.payload?.user));
                        this.store$.dispatch(notificationSuccessDialog(payload));
                        this.router.navigate(['/dashboard']);
                    }),
                    catchError(({error}) => of(notificationErrorDialog(error)))
                )
            })
        )
    }, { dispatch: false });
    _logout = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserType.LOGOUT),
            switchMap(() => {
                return this.authService.logout().pipe(
                    tap((payload) => {
                        console.log("pay", payload);
                        sessionStorage.clear();
                        this.store$.dispatch(notificationSuccessDialog(payload));
                        this.router.navigate(['/login']);
                    }),
                    catchError(({error}) => of(notificationErrorDialog(error)))
                )
            })
        )
    }, { dispatch: false });
}