import { createReducer, on } from "@ngrx/store";
import { DataTableInitialState } from "./datatable.state";
import { setDataTable } from "./datatable.action";

const _datatableReducer = createReducer(
    DataTableInitialState,
    on(setDataTable, (state, {payload}) => {
        return {
            ...state,
            data: payload.data ?? state.data,
            current_page: payload.current_page ?? state.current_page,
            last_page: payload.last_page ?? state.last_page,
            total: payload.total ?? state.total,
            table_heads: payload.table_heads ?? state.table_heads,
            params: payload.params ?? state.params,
            message: payload.message ?? state.message
        }
    })
)
export function datatableReducer(state: any, action: any) {
    return _datatableReducer(state, action);
}