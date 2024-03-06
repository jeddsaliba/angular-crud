import { Chart, ChartStatusModel, ChartTopPerformersModel } from './chart.model';

const ChartInitialState: ChartStatusModel = {
  labels: [],
  data: [],
};

const ChartTopPerformersInitialState: ChartTopPerformersModel = {
  labels: [],
  datasets: []
}
export const ChartState: Chart = {
  chart_status: ChartInitialState,
  chart_top_performers: ChartTopPerformersInitialState
};
