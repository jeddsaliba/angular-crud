import { createAction } from "@ngrx/store";
import { SharedType } from "./shared.type";

export const setSelectOptions = createAction(SharedType.SELECT_OPTIONS, (payload: any) => ({payload}));
export const setSelectOptionsSuccess = createAction(SharedType.SELECT_OPTIONS_SUCCESS, (payload: any) => ({payload}));
export const setSelectOptionsCancel = createAction(SharedType.SELECT_OPTIONS_CANCEL);

export const showLoader = createAction(SharedType.SHOW_LOADER, (payload: any) => ({payload}));
export const showLoaderSuccess = createAction(SharedType.SHOW_LOADER_SUCCESS, (payload: any) => ({payload}));
export const showLoaderCancel = createAction(SharedType.SHOW_LOADER_CANCEL);

export const showSnackbar = createAction(SharedType.SHOW_SNACKBAR, (payload: any) => ({payload}));
export const showSnackbarSuccess = createAction(SharedType.SHOW_SNACKBAR_SUCCESS, (payload: any) => ({payload}));
export const showSnackbarCancel = createAction(SharedType.SHOW_SNACKBAR_CANCEL);