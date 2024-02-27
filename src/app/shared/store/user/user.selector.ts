import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "./user.model";

const userState = createFeatureSelector<User>('user');

export const selectUser = createSelector(userState, (state: User) => state.user);
