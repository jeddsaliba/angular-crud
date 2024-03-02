import { User, UserModel, UsersModel } from './user.model';

export const UserTableHeads: any = [
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
    key: 'email',
    label: 'Email',
    canSort: true,
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

const UserInitialState: UserModel = {
  id: 0,
  name: '',
  email: '',
};
const UsersInitialState: UsersModel = {
  current_page: 0,
  data: [],
  last_page: 0,
  total: 0,
};

export const UserState: User = {
  user: UserInitialState,
  users: UsersInitialState,
};
