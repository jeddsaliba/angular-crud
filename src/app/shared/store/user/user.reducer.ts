import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess } from './user.action';
import { UserState } from './user.state';
const _userReducer = createReducer(
  UserState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      access_token: action.payload.access_token,
      user: action.payload.user
    };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
