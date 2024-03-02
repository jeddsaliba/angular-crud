import { createAction } from "@ngrx/store";
import { ProjectType } from "./project.type";

export const getProjectList = createAction(ProjectType.LIST, (payload: any) => ({payload}));
export const getProjectListSuccess = createAction(ProjectType.LIST_SUCCESS, (payload: any) => ({payload}));
export const getProjectListCancel = createAction(ProjectType.LIST_CANCEL);

export const getProjectDetails = createAction(ProjectType.DETAILS, (payload: any) => ({payload}));
export const getProjectDetailsSuccess = createAction(ProjectType.DETAILS_SUCCESS, (payload: any) => ({payload}));
export const getProjectDetailsCancel = createAction(ProjectType.DETAILS_CANCEL);