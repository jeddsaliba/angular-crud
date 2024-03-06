export interface ChartStatusModel {
    labels: string[],
    data: number[]
}
export interface ChartTopPerformersModel {
    labels: string[],
    datasets: any
}
export interface Chart {
    chart_status: ChartStatusModel,
    chart_top_performers: ChartTopPerformersModel
}