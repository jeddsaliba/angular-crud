import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getChartTopPerformers, getChartTopPerformersCancel } from '@shared/redux/chart/chart.action';
import { ChartTopPerformersModel } from '@shared/redux/chart/chart.model';
import { selectChartTopPerformers } from '@shared/redux/chart/chart.selector';
import { ChartConfiguration } from 'chart.js';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-top-performers',
  templateUrl: './top-performers.component.html',
  styleUrls: ['./top-performers.component.scss']
})
export class TopPerformersComponent implements OnInit, OnDestroy {
  details$: Observable<ChartTopPerformersModel> = of();

  barChartLegend = true;
  barChartPlugins = [];
  data: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Pending',
        data: []
      },
      {
        label: 'Ongoing',
        data: []
      },
      {
        label: 'Completed',
        data: []
      }
    ]
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
  constructor(
    private store: Store
  ) {}
  ngOnInit(): void {
    this.store.dispatch(getChartTopPerformers());
    this.details$ = this.store.select(selectChartTopPerformers);
    this.details$.subscribe((data: ChartTopPerformersModel) => {
      this.data = {
        ...this.data,
        labels: data.labels,
        datasets: data.datasets
      };
    });
  }
  ngOnDestroy(): void {
    this.store.dispatch(getChartTopPerformersCancel());
  }
}
