import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { Urls } from '@enum/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private rest: RestService) { }

  chartStatus(): Observable<any> {
    return this.rest.get(`${Urls.chart}/${Urls.status}`);
  }
  chartTopPerformers(): Observable<any> {
    return this.rest.get(`${Urls.chart}/${Urls.top_performers}`);
  }
  chartPerformancePerMonth(params: any): Observable<any> {
    return this.rest.get(`${Urls.chart}/${Urls.performance}?${this.rest.restEndpointParams(params)}`);
  }
}
