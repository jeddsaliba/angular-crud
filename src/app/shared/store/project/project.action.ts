import { createAction } from "@ngrx/store";
import { ProjectType } from "./project.type";

export const getProjectList = createAction(ProjectType.LIST, (payload: any) => ({payload}));
export const getProjectListSuccess = createAction(ProjectType.LIST_SUCCESS, (payload: any) => ({payload}));
export const getProjectListCancel = createAction(ProjectType.LIST_CANCEL);