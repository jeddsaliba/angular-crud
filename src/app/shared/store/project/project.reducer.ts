import { createReducer, on } from "@ngrx/store";
import { ProjectState } from "./project.state";
import { getProjectListSuccess } from "./project.action";

const _projectReducer = createReducer(
    ProjectState,
    on(getProjectListSuccess, (state, {payload}) => {
        return {
            ...state,
            projects: payload?.result
        }
    })
)
export function projectReducer(state: any, action: any) {
    return _projectReducer(state, action);
}