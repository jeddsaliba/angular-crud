import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataTableModel } from "./datatable.model";

const datatableState = createFeatureSelector<DataTableModel>('datatable');
export const selectTableData = createSelector(datatableState, (state: DataTableModel) => state.data);
export const selectTableCurrentPage = createSelector(datatableState, (state: DataTableModel) => state.current_page);
export const selectTableLastPage = createSelector(datatableState, (state: DataTableModel) => state.last_page);
export const selectTableTotal = createSelector(datatableState, (state: DataTableModel) => state.total);
export const selectTableHeads = createSelector(datatableState, (state: DataTableModel) => state.table_heads);
export const selectTableParams = createSelector(datatableState, (state: DataTableModel) => state.params);
export const selectTableMessage = createSelector(datatableState, (state: DataTableModel) => state.message);