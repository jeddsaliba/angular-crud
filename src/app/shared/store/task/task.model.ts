export interface ProjectTaskModel {
    id: number,
    project_id: number,
    name: string,
    description: string,
    created_at: string,
    start_date: string,
    end_date: string,
    assigned_to_name: string
}

export interface ProjectTasksModel {
    current_page: number,
    data: ProjectTaskModel[],
    last_page: number,
    total: number
}

export interface ProjectTask {
    project_task: ProjectTaskModel,
    project_tasks: ProjectTasksModel
}