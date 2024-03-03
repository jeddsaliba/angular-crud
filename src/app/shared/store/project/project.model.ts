export interface ProjectModel {
    id: number,
    name: string,
    description: string,
    created_at: string,
    created_by_name: string
}

export interface ProjectsModel {
    current_page: number,
    data: ProjectModel[],
    last_page: number,
    total: number
}

export interface Project {
    project: ProjectModel,
    projects: ProjectsModel
}