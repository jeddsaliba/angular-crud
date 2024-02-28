import { Project, ProjectModel, ProjectsModel } from "./project.model";

const ProjectInitialState: ProjectModel = {
    id: 0,
    name: '',
    description: '',
    created_at: "",
    created_by_name: ""
}
const ProjectsInitialState: ProjectsModel = {
    current_page: 0,
    data: [],
    last_page: 0,
    total: 0
}
export const ProjectState: Project = {
    project: ProjectInitialState,
    projects: ProjectsInitialState
};