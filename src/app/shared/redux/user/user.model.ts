export interface UserModel {
    id: number,
    name: string,
    email: string
}
export interface UsersModel {
    current_page: number,
    data: UserModel[],
    last_page: number,
    total: number
}
export interface User {
    user: UserModel,
    users: UsersModel
}