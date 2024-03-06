import { Chart, ChartStatusModel, ChartTopPerformersModel, ChartPerformancePerMonthModel } from './chart.model';

const ChartInitialState: ChartStatusModel = {
  labels: [],
  data: [],
};

const ChartTopPerformersInitialState: ChartTopPerformersModel = {
  labels: [],
  datasets: []
}

const ChartPerformancePerMonthInitialState: ChartPerformancePerMonthModel = {
  labels: [],
  datasets: []
}

export const ChartState: Chart = {
  chart_status: ChartInitialState,
  chart_top_performers: ChartTopPerformersInitialState,
  chart_performance_per_month: ChartPerformancePerMonthInitialState
};
