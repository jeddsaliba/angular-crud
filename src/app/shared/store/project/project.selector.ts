import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Project } from "./project.model";

const projectState = createFeatureSelector<Project>('project');
export const selectProjects = createSelector(projectState, (state: Project) => state.projects);