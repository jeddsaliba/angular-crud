import { createReducer, on } from "@ngrx/store";
import { ChartState } from "./chart.state";
import { getChartPerformancePerMonthCancel, getChartPerformancePerMonthSuccess, getChartStatusCancel, getChartStatusSuccess, getChartTopPerformersCancel, getChartTopPerformersSuccess } from "./chart.action";

const _chartReducer = createReducer(
    ChartState,
    on(getChartStatusSuccess, (state, {payload}) => {
        return {
            ...state,
            chart_status: payload
        }
    }),
    on(getChartStatusCancel, () => {
        return {
            ...ChartState
        }
    }),
    on(getChartTopPerformersSuccess, (state, {payload}) => {
        return {
            ...state,
            chart_top_performers: payload
        }
    }),
    on(getChartTopPerformersCancel, () => {
        return {
            ...ChartState
        }
    }),
    on(getChartPerformancePerMonthSuccess, (state, {payload}) => {
        return {
            ...state,
            chart_performance_per_month: payload
        }
    }),
    on(getChartPerformancePerMonthCancel, () => {
        return {
            ...ChartState
        }
    }),
)
export function chartReducer(state: any, action: any) {
    return _chartReducer(state, action);
}