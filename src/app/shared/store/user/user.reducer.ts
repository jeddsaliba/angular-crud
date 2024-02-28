import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from './user.action';
import { UserState } from './user.state';
const _userReducer = createReducer(
  UserState,
  on(loginSuccess, (state, action) => {
    return {
      ...state
    };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
