import { createReducer, on } from "@ngrx/store";
import { ChartState } from "./chart.state";
import { getChartPerformancePerMonthSuccess, getChartStatusSuccess, getChartTopPerformersSuccess } from "./chart.action";

const _chartReducer = createReducer(
    ChartState,
    on(getChartStatusSuccess, (state, {payload}) => {
        return {
            ...state,
            chart_status: payload
        }
    }),
    on(getChartTopPerformersSuccess, (state, {payload}) => {
        return {
            ...state,
            chart_top_performers: payload
        }
    }),
    on(getChartPerformancePerMonthSuccess, (state, {payload}) => {
        return {
            ...state,
            chart_performance_per_month: payload
        }
    })
)
export function chartReducer(state: any, action: any) {
    return _chartReducer(state, action);
}