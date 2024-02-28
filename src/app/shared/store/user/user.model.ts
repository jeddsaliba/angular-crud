export interface UserModel {
    id: number,
    name: string,
    email: string
}
export interface User {
    user: UserModel
}
export interface LoginPayload {
    email: string,
    password: string
}