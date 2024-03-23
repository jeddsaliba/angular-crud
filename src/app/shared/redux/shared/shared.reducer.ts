import { createReducer, on } from "@ngrx/store";
import { SharedState } from "./shared.state";
import { setSelectOptionsCancel, setSelectOptionsSuccess, showLoaderCancel, showLoaderSuccess, showSnackbarCancel, showSnackbarSuccess } from "./shared.action";

const _sharedReducer = createReducer(
    SharedState,
    on(setSelectOptionsSuccess, (state, {payload}) => {
        return {
            ...state,
            select_options: payload
        }
    }),
    on(setSelectOptionsCancel, (state) => {
        return {
            ...state,
            select_options: SharedState.select_options
        }
    }),
    on(showLoaderSuccess, (state, {payload}) => {
        return {
            ...state,
            show_loader: payload
        }
    }),
    on(showLoaderCancel, (state) => {
        return {
            ...state,
            show_loader: SharedState.show_loader
        }
    }),
    on(showSnackbarSuccess, (state, {payload}) => {
        return {
            ...state,
            snackbar_message: payload
        }
    }),
    on(showSnackbarCancel, (state) => {
        return {
            ...state,
            snackbar_message: SharedState.snackbar_message
        }
    }),
)
export function sharedReducer(state: any, action: any) {
    return _sharedReducer(state, action);
}