import { createAction } from "@ngrx/store";
import { ProjectType } from "./project.type";

export const getProjectList = createAction(ProjectType.LIST, (payload: any) => ({payload}));
export const getProjectListSuccess = createAction(ProjectType.LIST_SUCCESS, (payload: any) => ({payload}));
export const getProjectListCancel = createAction(ProjectType.LIST_CANCEL);

export const getProjectDetails = createAction(ProjectType.DETAILS, (payload: any) => ({payload}));
export const getProjectDetailsSuccess = createAction(ProjectType.DETAILS_SUCCESS, (payload: any) => ({payload}));
export const getProjectDetailsCancel = createAction(ProjectType.DETAILS_CANCEL);

export const postProjectCreate = createAction(ProjectType.CREATE, (payload: any) => ({payload}));
export const postProjectCreateSuccess = createAction(ProjectType.CREATE_SUCCESS, (payload: any) => ({payload}));
export const getProjectTaskCreateCancel = createAction(ProjectType.CREATE_CANCEL);

export const putProjectUpdate = createAction(ProjectType.UPDATE, (payload: any) => ({payload}));
export const putProjectUpdateSuccess = createAction(ProjectType.UPDATE_SUCCESS, (payload: any) => ({payload}));
export const putProjectUpdateCancel = createAction(ProjectType.UPDATE_CANCEL);

export const deleteProjectDelete = createAction(ProjectType.DELETE, (payload: any) => ({payload}));
export const deleteProjectDeleteSuccess = createAction(ProjectType.DELETE_SUCCESS, (payload: any) => ({payload}));
export const deleteProjectDeleteCancel = createAction(ProjectType.DELETE_CANCEL);