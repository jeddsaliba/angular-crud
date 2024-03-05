import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration } from 'chart.js';
import { Observable, of } from 'rxjs';
import { getChartTopPerformers } from 'src/app/shared/store/chart/chart.action';
import { ChartTopPerformersModel } from 'src/app/shared/store/chart/chart.model';
import { selectChartTopPerformers } from 'src/app/shared/store/chart/chart.selector';

@Component({
  selector: 'app-top-performers',
  templateUrl: './top-performers.component.html',
  styleUrls: ['./top-performers.component.scss']
})
export class TopPerformersComponent implements OnInit {
  details$: Observable<ChartTopPerformersModel[]> = of([]);

  barChartLegend = true;
  barChartPlugins = [];
  labels: string[] = [];
  data: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };
  isLoaded = false;
  constructor(
    private store: Store
  ) {}
  ngOnInit(): void {
    this.store.dispatch(getChartTopPerformers());
    this.details$ = this.store.select(selectChartTopPerformers);
    this.details$.subscribe((data: ChartTopPerformersModel[]) => {
      this.labels = data.map(({assigned_to_name}) => {
        return assigned_to_name;
      });
      const datasets: any = [];
      data.forEach(({performance}) => {
        performance.forEach((perf) => {
          const find = datasets.findIndex((x: any) => x.label === perf.label);
          if (find < 0) {
            datasets.push({
              label: perf.label,
              data: [perf.value]
            });
          } else {
            datasets[find].data.push(perf.value);
          }
        })
      });
      this.data.labels = this.labels;
      this.data.datasets = datasets;
    });
  }
}
