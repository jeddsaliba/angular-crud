import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProjectTask } from "./task.model";

const projectTaskState = createFeatureSelector<ProjectTask>('task');
export const selectProjectTaskss = createSelector(projectTaskState, (state: ProjectTask) => state.project_tasks);
export const selectProjectTaskDetails = createSelector(projectTaskState, (state: ProjectTask) => state.project_task);