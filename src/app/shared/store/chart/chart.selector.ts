import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Chart } from "./chart.model";

const chartState = createFeatureSelector<Chart>('chart');
export const selectChartStatus = createSelector(chartState, (state: Chart) => state.chart_status);
export const selectChartTopPerformers = createSelector(chartState, (state: Chart) => state.chart_top_performers);