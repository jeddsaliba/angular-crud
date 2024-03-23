import { DataTableModel } from "./datatable.model";

export const DataTableInitialState: DataTableModel = {
    current_page: 0,
    data: [],
    last_page: 0,
    total: 0,
    table_heads: [],
    params: {},
    message: ''
}