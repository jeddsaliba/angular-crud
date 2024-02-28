import { createAction } from "@ngrx/store";
import { DatatableType } from "./datatable.type";

export const setDataTable = createAction(
    DatatableType.DATATABLE,
    (payload: any) => ({
        payload,
    })
);