import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest/rest.service';
import { Urls } from '@enum/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private rest: RestService) { }

  list(params: any): Observable<any> {
    return this.rest.get(`${Urls.user}/${Urls.list}?${this.rest.restEndpointParams(params)}`)
  }
}
