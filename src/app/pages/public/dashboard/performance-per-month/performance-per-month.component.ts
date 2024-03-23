import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getChartPerformancePerMonth, getChartPerformancePerMonthCancel } from '@shared/redux/chart/chart.action';
import { ChartPerformancePerMonthModel } from '@shared/redux/chart/chart.model';
import { selectChartPerformancePerMonth } from '@shared/redux/chart/chart.selector';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-performance-per-month',
  templateUrl: './performance-per-month.component.html',
  styleUrls: ['./performance-per-month.component.scss']
})
export class PerformancePerMonthComponent implements OnInit, OnDestroy {
  yearForm: FormGroup | any;
  yearOptions: any[] = [];
  details$: Observable<ChartPerformancePerMonthModel> = of();
  data: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  constructor(
    private store: Store,
    protected formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.initYearOptions();
    this.initForm();
    this.initData();
  }
  initData() {
    this.store.dispatch(getChartPerformancePerMonth(this.yearForm.value));
    this.details$ = this.store.select(selectChartPerformancePerMonth);
    this.details$.subscribe((data: ChartPerformancePerMonthModel) => {
      this.data = {
        ...this.data,
        labels: data.labels,
        datasets: data.datasets
      };
    });
  }
  initYearOptions() {
    const currentYear = (new Date()).getFullYear();
    const range = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    range(currentYear, currentYear - 50, -1).forEach((data) => {
      this.yearOptions.push({
        label: data,
        value: data
      });
    });
  }
  initForm() {
    this.yearForm = this.formBuilder.group({
      year: [
        new Date().getFullYear(),
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4)
        ]),
      ],
    })
  }
  onChange(value: any) {
    this.yearForm.controls.year.setValue(value);
    this.initData();
  }
  ngOnDestroy(): void {
    this.store.dispatch(getChartPerformancePerMonthCancel());
  }
}
