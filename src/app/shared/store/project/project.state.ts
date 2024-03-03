import { Project, ProjectModel, ProjectsModel } from './project.model';

export const ProjectTableHeads: any = [
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
    key: 'created_by_name',
    label: 'Created By',
    canSort: false,
  },
  {
    key: 'created_at',
    label: 'Date Created',
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
const ProjectInitialState: ProjectModel = {
  id: 0,
  name: '',
  description: '',
  created_at: '',
  created_by_name: '',
};
const ProjectsInitialState: ProjectsModel = {
  current_page: 0,
  data: [],
  last_page: 0,
  total: 0,
};

export const ProjectState: Project = {
  project: ProjectInitialState,
  projects: ProjectsInitialState
};
