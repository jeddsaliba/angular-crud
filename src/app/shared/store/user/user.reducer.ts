import { createReducer, on } from '@ngrx/store';
import { getUserListSuccess, loginSuccess } from './user.action';
import { UserState } from './user.state';
const _userReducer = createReducer(
  UserState,
  on(loginSuccess, (state, {payload}) => {
    const user = payload.result.user;
    return {
      ...state,
      user
    };
  }),
  on(getUserListSuccess, (state, {payload}) => {
    return {
        ...state,
        users: payload?.result
    }
})
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
