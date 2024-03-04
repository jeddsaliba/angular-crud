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
    return this.rest.get(`${urls.project}/${urls.list}?${this.rest.restEndpointParams(params)}`)
  }
  details(id: string): Observable<any> {
    return this.rest.get(`${urls.project}/${urls.view}/${id}`)
  }
  create(data: any): Observable<any> {
    return this.rest.post(`${urls.project}/${urls.create}`, data);
  }
  update(id: string, data: any): Observable<any> {
    return this.rest.put(`${urls.project}/${urls.update}/${id}`, data);
  }
  delete(id: string): Observable<any> {
    return this.rest.delete(`${urls.project}/${urls.delete}/${id}`);
  }
}
