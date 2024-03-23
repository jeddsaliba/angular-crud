import { createAction } from "@ngrx/store";
import { ChartType } from "./chart.type";

export const getChartStatus = createAction(ChartType.CHART_STATUS);
export const getChartStatusSuccess = createAction(ChartType.CHART_STATUS_SUCCESS, (payload: any) => ({payload}));
export const getChartStatusCancel = createAction(ChartType.CHART_STATUS_CANCEL);

export const getChartTopPerformers = createAction(ChartType.CHART_TOP_PERFORMERS);
export const getChartTopPerformersSuccess = createAction(ChartType.CHART_TOP_PERFORMERS_SUCCESS, (payload: any) => ({payload}));
export const getChartTopPerformersCancel = createAction(ChartType.CHART_TOP_PERFORMERS_CANCEL);

export const getChartPerformancePerMonth = createAction(ChartType.CHART_PERFORMANCE_PER_MONTH, (payload: any) => ({payload}));
export const getChartPerformancePerMonthSuccess = createAction(ChartType.CHART_PERFORMANCE_PER_MONTH_SUCCESS, (payload: any) => ({payload}));
export const getChartPerformancePerMonthCancel = createAction(ChartType.CHART_PERFORMANCE_PER_MONTH_CANCEL);