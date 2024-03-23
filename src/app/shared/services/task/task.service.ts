import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest/rest.service';
import { Urls } from '@enum/urls';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private rest: RestService) { }
  list(params: {id: string, params: any}): Observable<any> {
    return this.rest.get(`${Urls.task}/${params.id}/${Urls.list}?${this.rest.restEndpointParams(params.params)}`);
  }
  details(project_id: string, id: string): Observable<any> {
    return this.rest.get(`${Urls.task}/${project_id}/${Urls.view}/${id}`);
  }
  create(project_id: string, data: any): Observable<any> {

    return this.rest.post(`${Urls.task}/${project_id}/${Urls.create}`, data);
  }
  update(project_id: string, id: string, data: any): Observable<any> {
    return this.rest.put(`${Urls.task}/${project_id}/${Urls.update}/${id}`, data);
  }
  delete(project_id: string, id: string): Observable<any> {
    return this.rest.delete(`${Urls.task}/${project_id}/${Urls.delete}/${id}`);
  }
}
