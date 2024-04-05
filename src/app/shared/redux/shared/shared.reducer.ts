import { createReducer, on } from "@ngrx/store";
import { SharedState } from "./shared.state";
import { isRouteChildCancel, isRouteChildSuccess, setSelectOptionsCancel, setSelectOptionsSuccess, showLoaderCancel, showLoaderSuccess, showSnackbarCancel, showSnackbarSuccess } from "./shared.action";

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
    on(isRouteChildSuccess, (state, {payload}) => {
        return {
            ...state,
            is_route_child: payload
        }
    }),
    on(isRouteChildCancel, (state) => {
        return {
            ...state,
            is_route_child: SharedState.is_route_child
        }
    }),
)
export function sharedReducer(state: any, action: any) {
    return _sharedReducer(state, action);
}