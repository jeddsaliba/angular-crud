export interface DataTableModel {
    current_page: number,
    data: any[],
    last_page: number,
    total: number,
    table_heads: string[],
    params: any,
    message: string
}