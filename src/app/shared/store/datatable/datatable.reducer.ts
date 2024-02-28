import { createReducer, on } from "@ngrx/store";
import { DataTableInitialState } from "./datatable.state";
import { setDataTable } from "./datatable.action";

const _datatableReducer = createReducer(
    DataTableInitialState,
    on(setDataTable, (state, {payload}) => {
        return {
            ...state,
            data: payload.data,
            current_page: payload.current_page,
            last_page: payload.last_page,
            total: payload.total,
            table_heads: payload.table_heads
        }
    })
)
export function datatableReducer(state: any, action: any) {
    return _datatableReducer(state, action);
}