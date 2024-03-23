import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Auth } from "./auth.model";

const authState = createFeatureSelector<Auth>('auth');

export const selectLoggedInUser = createSelector(authState, (state: Auth) => state.logged_in_user);