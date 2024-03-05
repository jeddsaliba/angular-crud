import { Chart, ChartModel, ChartTopPerformersModel } from './chart.model';

const ChartInitialState: ChartModel[] = [{
  label: '',
  value: 0,
}];

const ChartTopPerformersInitialState: ChartTopPerformersModel[] = [{
  assigned_to: 0,
  assigned_to_name: '',
  total: 0,
  performance: [
    {
      label: '',
      value: 0
    },
    {
      label: '',
      value: 0
    },
    {
      label: '',
      value: 0
    }
  ]
}];
export const ChartState: Chart = {
  chart_status: ChartInitialState,
  chart_top_performers: ChartTopPerformersInitialState
};
