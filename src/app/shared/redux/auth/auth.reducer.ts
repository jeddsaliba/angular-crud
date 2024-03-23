import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from './auth.action';
import { AuthState } from './auth.state';
const _authReducer = createReducer(
  AuthState,
  on(loginSuccess, (state, {payload}) => {
    const user = payload.result.user;
    return {
      ...state,
      user
    };
  })
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
