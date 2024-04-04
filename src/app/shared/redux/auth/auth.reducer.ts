import { createReducer, on } from '@ngrx/store';
import { loggedInUserSuccess, loginSuccess, logoutSuccess } from './auth.action';
import { AuthState } from './auth.state';
const _authReducer = createReducer(
  AuthState,
  on(loginSuccess, (state, {payload}) => {
    const logged_in_user = payload.result.user;
    return {
      ...state,
      logged_in_user
    };
  }),
  on(loggedInUserSuccess, (state, {payload}) => {
    const logged_in_user = payload.result.user;
    return {
      ...state,
      logged_in_user
    };
  }),
  on(logoutSuccess, () => {
    return {
      ...AuthState
    };
  }),
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
