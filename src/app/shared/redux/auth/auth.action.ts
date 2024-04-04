import { createAction } from "@ngrx/store";
import { UserType } from "./auth.type";

export const login = createAction(UserType.LOGIN, (payload: any) => ({payload}));
export const loginSuccess = createAction(UserType.LOGIN_SUCCESS, (payload: any) => ({payload}));
export const loginCancel = createAction(UserType.LOGIN_CANCEL);

export const logout = createAction(UserType.LOGOUT);

export const logoutSuccess = createAction(UserType.LOGOUT_SUCCESS, (payload: any) => ({
    payload
}));
export const logoutCancel = createAction(UserType.LOGOUT_CANCEL);

export const loggedInUser = createAction(UserType.LOGGED_IN_USER);

export const loggedInUserSuccess = createAction(UserType.LOGGED_IN_USER_SUCCESS, (payload: any) => ({
    payload
}));
export const loggedInUserCancel = createAction(UserType.LOGGED_IN_USER_CANCEL);