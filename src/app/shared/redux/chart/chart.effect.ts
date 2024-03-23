import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, takeUntil } from 'rxjs';

import { ChartType } from './chart.type';
import {
  getChartPerformancePerMonthSuccess,
  getChartStatusSuccess,
  getChartTopPerformersSuccess,
} from './chart.action';
import { ChartService } from '@shared/services/chart/chart.service';
import { showSnackbar } from '../shared/shared.action';

@Injectable()
export class ChartEffect {
  constructor(private chartService: ChartService, private actions$: Actions) {}
  _getChartStatus = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChartType.CHART_STATUS),
      switchMap(() => {
        return this.chartService.chartStatus().pipe(
          map((data) => {
            const { result } = data;
            return getChartStatusSuccess(result);
          }),
          takeUntil(this.actions$.pipe(ofType(ChartType.CHART_STATUS_CANCEL))),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _getChartTopPerformers = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChartType.CHART_TOP_PERFORMERS),
      switchMap(() => {
        return this.chartService.chartTopPerformers().pipe(
          map((data) => {
            const { result } = data;
            return getChartTopPerformersSuccess(result);
          }),
          takeUntil(
            this.actions$.pipe(ofType(ChartType.CHART_TOP_PERFORMERS_CANCEL))
          ),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
  _getChartPerformancePerMonth = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChartType.CHART_PERFORMANCE_PER_MONTH),
      switchMap(({ payload }) => {
        return this.chartService.chartPerformancePerMonth(payload).pipe(
          map((data) => {
            const { result } = data;
            return getChartPerformancePerMonthSuccess(result);
          }),
          takeUntil(
            this.actions$.pipe(
              ofType(ChartType.CHART_PERFORMANCE_PER_MONTH_CANCEL)
            )
          ),
          catchError(({ error }) => of(showSnackbar(error?.message)))
        );
      })
    );
  });
}
