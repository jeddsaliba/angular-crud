import { createAction, props } from "@ngrx/store";
import { UserType } from "./user.type";

export const login = createAction(UserType.LOGIN, (payload: any) => ({
    payload
}));
export const loginSuccess = createAction(UserType.LOGIN_SUCCESS, (payload: any) => ({
    payload
}));
export const loginCancel = createAction(UserType.LOGIN_CANCEL);

export const logout = createAction(UserType.LOGOUT);

export const logoutSuccess = createAction(UserType.LOGOUT_SUCCESS, (payload: any) => ({
    payload
}));
export const logoutancel = createAction(UserType.LOGOUT_CANCEL);