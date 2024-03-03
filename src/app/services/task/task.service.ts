import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { urls } from 'src/app/lib/urls/urls';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private rest: RestService) { }
  list(params: {id: string, params: any}): Observable<any> {
    return this.rest.get(`${urls.task}/${params.id}/${urls.list}?${this.rest.restEndpointParams(params.params)}`);
  }
  details(project_id: string, id: string): Observable<any> {
    return this.rest.get(`${urls.task}/${project_id}/${urls.view}/${id}`);
  }
  create(project_id: string, data: any): Observable<any> {
    return this.rest.post(`${urls.task}/${project_id}/${urls.create}`, data);
  }
  update(project_id: string, id: string, data: any): Observable<any> {
    return this.rest.put(`${urls.task}/${project_id}/${urls.update}/${id}`, data);
  }
  delete(project_id: string, id: string): Observable<any> {
    return this.rest.delete(`${urls.task}/${project_id}/${urls.delete}/${id}`);
  }
}
