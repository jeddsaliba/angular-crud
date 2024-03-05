import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartOptions } from 'chart.js';
import { Observable, of } from 'rxjs';
import { getChartStatus } from 'src/app/shared/store/chart/chart.action';
import { ChartModel } from 'src/app/shared/store/chart/chart.model';
import { selectChartStatus } from 'src/app/shared/store/chart/chart.selector';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  labels: string[] = [];
  datasets: any = [];
  public pieChartDatasets = [{
    data: [ 300, 500, 100 ]
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  details$: Observable<ChartModel[]> = of([]);
  constructor(
    private store: Store
  ) {}
  ngOnInit(): void {
    this.store.dispatch(getChartStatus());
    this.details$ = this.store.select(selectChartStatus);
    this.details$.subscribe((data: ChartModel[]) => {
      this.labels = data.map((label) => {
        return label.label
      });
      const values = data.map((value) => {
        return value.value
      });
      this.datasets = [{
        data: values
      }];
    });
  }
}
