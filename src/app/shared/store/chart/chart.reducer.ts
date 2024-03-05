import { createReducer, on } from "@ngrx/store";
import { ChartState } from "./chart.state";
import { getChartStatusSuccess, getChartTopPerformersSuccess } from "./chart.action";

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
    })
)
export function chartReducer(state: any, action: any) {
    return _chartReducer(state, action);
}