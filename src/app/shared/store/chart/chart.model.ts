export interface ChartModel {
    label: string,
    value: number
}
export interface ChartTopPerformersModel {
    assigned_to: number,
    assigned_to_name: string,
    total: number,
    performance: [
        {
            label: string,
            value: number
        },
        {
            label: string,
            value: number
        },
        {
            label: string,
            value: number
        }
    ]
}
export interface Chart {
    chart_status: ChartModel[],
    chart_top_performers: ChartTopPerformersModel[]
}