import { ProjectTask, ProjectTaskModel, ProjectTasksModel } from './task.model';

export const ProjectTaskTableHeads: any = [
  {
    key: 'id',
    label: 'ID',
    canSort: true,
  },
  {
    key: 'name',
    label: 'Name',
    canSort: true,
  },
  {
    key: 'assigned_to_name',
    label: 'Assigned To',
    canSort: false,
  },
  {
    key: 'status',
    label: 'Status',
    canSort: true,
  },
  {
    key: 'start_date',
    label: 'Date Started',
    canSort: true,
    pipe: 'date',
  },
  {
    key: 'end_date',
    label: 'Due Date',
    canSort: true,
    pipe: 'date',
  },
  {
    key: 'actions',
    label: 'Actions',
    canView: true,
    canEdit: true,
    canDelete: true,
    canArchive: false,
    canSort: false,
    showActions: true,
  },
];

const ProjectTaskInitialState: ProjectTaskModel = {
  id: 0,
  name: '',
  description: '',
  created_at: '',
  start_date: '',
  end_date: '',
  assigned_to: 0,
  assigned_to_name: '',
  project_id: 0,
  status: ''
};
const ProjectTasksInitialState: ProjectTasksModel = {
  current_page: 0,
  data: [],
  last_page: 0,
  total: 0,
};

export const ProjectTaskState: ProjectTask = {
  project_task: ProjectTaskInitialState,
  project_tasks: ProjectTasksInitialState
};
