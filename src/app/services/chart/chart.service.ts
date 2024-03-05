import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';
import { urls } from 'src/app/lib/urls/urls';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private rest: RestService) { }

  chartStatus(): Observable<any> {
    return this.rest.get(`${urls.chart}/${urls.status}`);
  }
  chartTopPerformers(): Observable<any> {
    return this.rest.get(`${urls.chart}/${urls.top_performers}`);
  }
}
