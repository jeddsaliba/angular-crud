import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getChartStatus, getChartStatusCancel } from '@shared/redux/chart/chart.action';
import { ChartStatusModel } from '@shared/redux/chart/chart.model';
import { selectChartStatus } from '@shared/redux/chart/chart.selector';
import { ChartOptions } from 'chart.js';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit, OnDestroy {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  labels: string[] = [
    'Pending', 'Ongoing', 'Completed'
  ];
  datasets: any = [{data:[]}];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  details$: Observable<ChartStatusModel> = of();
  constructor(
    private store: Store
  ) {}
  ngOnInit(): void {
    this.store.dispatch(getChartStatus());
    this.details$ = this.store.select(selectChartStatus);
    this.details$.subscribe((data: ChartStatusModel) => {
      this.labels = data.labels;
      this.datasets = [{ data: data.data }];
    });
  }
  ngOnDestroy(): void {
    this.store.dispatch(getChartStatusCancel());
  }
}
