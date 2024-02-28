import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { urls } from 'src/app/lib/urls/urls';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private rest: RestService) { }

  list(params: any): Observable<any> {
    return this.rest.get(`${urls.project_list}?${this.rest.restEndpointParams(params)}`)
  }
}
