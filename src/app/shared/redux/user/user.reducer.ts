import { createReducer, on } from '@ngrx/store';
import { getUserListSuccess } from './user.action';
import { UserState } from './user.state';
const _userReducer = createReducer(
  UserState,
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
