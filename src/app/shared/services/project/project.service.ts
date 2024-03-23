import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest/rest.service';
import { Urls } from '@enum/urls';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private rest: RestService) { }

  list(params: any): Observable<any> {
    return this.rest.get(`${Urls.project}/${Urls.list}?${this.rest.restEndpointParams(params)}`)
  }
  details(id: string): Observable<any> {
    return this.rest.get(`${Urls.project}/${Urls.view}/${id}`)
  }
  create(data: any): Observable<any> {
    return this.rest.post(`${Urls.project}/${Urls.create}`, data);
  }
  update(id: string, data: any): Observable<any> {
    return this.rest.put(`${Urls.project}/${Urls.update}/${id}`, data);
  }
  delete(id: string): Observable<any> {
    return this.rest.delete(`${Urls.project}/${Urls.delete}/${id}`);
  }
}
