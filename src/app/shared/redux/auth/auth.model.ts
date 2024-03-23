export interface AuthModel {
    id: number,
    name: string,
    email: string
}
export interface Auth {
    logged_in_user: AuthModel
}