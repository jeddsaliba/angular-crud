import { createAction } from "@ngrx/store";
import { ProjectTaskType } from "./task.type";

export const getProjectTaskList = createAction(ProjectTaskType.LIST, (payload: any) => ({payload}));
export const getProjectTaskListSuccess = createAction(ProjectTaskType.LIST_SUCCESS, (payload: any) => ({payload}));
export const getProjectTaskListCancel = createAction(ProjectTaskType.LIST_CANCEL);

export const getProjectTaskDetails = createAction(ProjectTaskType.DETAILS, (payload: any) => ({payload}));
export const getProjectTaskDetailsSuccess = createAction(ProjectTaskType.DETAILS_SUCCESS, (payload: any) => ({payload}));
export const getProjectTaskDetailsCancel = createAction(ProjectTaskType.DETAILS_CANCEL);

export const postProjectTaskCreate = createAction(ProjectTaskType.CREATE, (payload: any) => ({payload}));
export const postProjectTaskCreateSuccess = createAction(ProjectTaskType.CREATE_SUCCESS, (payload: any) => ({payload}));
export const getProjectTaskCreateCancel = createAction(ProjectTaskType.CREATE_CANCEL);

export const putProjectTaskUpdate = createAction(ProjectTaskType.UPDATE, (payload: any) => ({payload}));
export const putProjectTaskUpdateSuccess = createAction(ProjectTaskType.UPDATE_SUCCESS, (payload: any) => ({payload}));
export const putProjectTaskUpdateCancel = createAction(ProjectTaskType.UPDATE_CANCEL);

export const deleteProjectTaskDelete = createAction(ProjectTaskType.DELETE, (payload: any) => ({payload}));
export const deleteProjectTaskDeleteSuccess = createAction(ProjectTaskType.DELETE_SUCCESS, (payload: any) => ({payload}));
export const deleteProjectTaskDeleteCancel = createAction(ProjectTaskType.DELETE_CANCEL);