import { createReducer, on } from "@ngrx/store";
import { ProjectTaskState } from "./task.state";
import { getProjectTaskDetailsSuccess, getProjectTaskListSuccess } from "./task.action";

const _projectTaskReducer = createReducer(
    ProjectTaskState,
    on(getProjectTaskListSuccess, (state, {payload}) => {
        return {
            ...state,
            project_tasks: payload?.result
        }
    }),
    on(getProjectTaskDetailsSuccess, (state, {payload}) => {
        return {
            ...state,
            project_task: payload?.result
        }
    })
)
export function projectTaskReducer(state: any, action: any) {
    return _projectTaskReducer(state, action);
}