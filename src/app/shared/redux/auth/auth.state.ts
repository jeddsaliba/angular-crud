import { Auth, AuthModel } from './auth.model';

const AuthInitialState: AuthModel = {
  id: 0,
  name: '',
  email: '',
};

export const AuthState: Auth = {
  logged_in_user: AuthInitialState,
};
