import { createAction } from "@ngrx/store";
import { UserType } from "./user.type";

export const getUserList = createAction(UserType.LIST, (payload?: any) => ({payload}));
export const getUserListSuccess = createAction(UserType.LIST_SUCCESS, (payload: any) => ({payload}));
export const getUserListCancel = createAction(UserType.LIST_CANCEL);